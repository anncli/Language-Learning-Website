import { PrismaClient, User } from "@prisma/client"
import { ErrorHandler } from "../utils/error-handler"
const prisma = new PrismaClient()

export async function getUserById(id: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { id }
    })
    if (user) {
        const {password, ...rest} = user; // remove password from the res body
        return rest as User
    }
    else return null
  } catch (error: unknown) {
    throw new Error(
      `Failed to fetch user with ID ${id}: ${(error as ErrorHandler).message}`
    )
  }
}


export async function updateUser(id: string, user: User): Promise<User> {
  try {
    return await prisma.user.update({
      where: { id },
      data: user
    })
  } catch (error: unknown) {
    throw new Error(
      `Failed to update user with ID ${id}: ${(error as ErrorHandler).message}`
    )
  }
}

export async function deleteAccount(id: string): Promise<User> {
  try {
    return await prisma.user.delete({
      where: { id }
    })
  } catch (error: unknown) {
    throw new Error(
      `Failed to delete user with ID ${id}: ${(error as ErrorHandler).message}`
    )
  }
}

export async function getAllUsers(): Promise<User[]> {
  try {
    return await prisma.user.findMany()
  } catch (error: unknown) {
    throw new Error(`Failed to fetch users: ${(error as ErrorHandler).message}`)
  }
}

export async function removeAll(): Promise<void> {
  try {
    await prisma.user.deleteMany()
  } catch (error: unknown) {
    throw new Error(
      `Failed to delete all users: ${(error as ErrorHandler).message}`
    )
  }
}

export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { email }
    })
    if (user) {
        return user
    }
    else return null
  } catch (error: unknown) {
    throw new Error(
      `Failed to fetch user with email ${email}: ${
        (error as ErrorHandler).message
      }`
    )
  }
}
