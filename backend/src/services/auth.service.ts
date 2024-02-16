import { PrismaClient, User } from "@prisma/client"
import { generateToken, verifyToken } from "../utils/jwt"
import { IFormattedResponse, TAuthCredentials } from "../utils/types"
import { getUserByEmail } from "./user.service"
import bcrypt from "bcrypt"
import { ErrorHandler } from "../utils/error-handler"
import { hashPassword } from "../utils/hash-password"

export async function login(
  user: TAuthCredentials
): Promise<IFormattedResponse<string>> {
  try {
    // check if user exists
    const existingUser = await getUserByEmail(user.email)
    if (!existingUser) {
      throw new ErrorHandler("User does not exist", 400)
    }
    const passwordMatch = await bcrypt.compare(
      user.password,
      existingUser!.password
    )
    if (existingUser && passwordMatch) {
      // generates token
      const token = generateToken(existingUser!)
      return {
        status: "success",
        data: token
      }
    } else {
      return {
        status: "error",
        message: "Invalid credentials"
      }
    }
  } catch (e: unknown) {
    return {
      status: "error",
      message: (e as ErrorHandler).message
    }
  }
}

export async function getLoggedIn(
  tkn: string
): Promise<IFormattedResponse<User | string>> {
  const token = tkn.split(' ')
  if (token[0] !== "Bearer") {
    return {
      status: "error",
      statusCode: 401,
      data: "Invalid token" 
    }
  }
  const decoded = verifyToken(token[1]) as User
  if (decoded.email) {
    const user = await getUserByEmail(decoded.email)
    if (user) {
      const { password, ...rest } = user // remove password from the res body
      return {
        status: "success",
        data: rest as User
      }
    }
  }
  return {
    status: "error",
    statusCode: 401,
    data: "Invalid token" 
  }
}

export async function createUser(user: User): Promise<User> {
  try {
    // check if user already exists
    const existingUser = await getUserByEmail(user.email)
    if (existingUser) {
      throw new ErrorHandler("User already exists", 400)
    }
    const hashedPassword = hashPassword(user.password)
    return await new PrismaClient().user.create({
      data: {...user, password: hashedPassword}
    })
  } catch (error: unknown) {
    throw new Error(`Failed to create user: ${(error as ErrorHandler).message}`)
  }
}
