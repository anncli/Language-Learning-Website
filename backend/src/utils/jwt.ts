import { User } from "@prisma/client"
import jwt from "jsonwebtoken"
// generates the jsonwebtoken for auth
export function generateToken(user: User): string {
  const { firstName, lastName, email, id } = user
  return jwt.sign(
    {
      firstName,
      lastName,
      email,
      id
    },
    process.env.JWT_SECRET_KEY!,
    {
      expiresIn: process.env.JWT_EXPIRATION_TIME!
    }
  )
}


export function verifyToken(token:string){
    return jwt.verify(token, process.env.JWT_SECRET_KEY!)
}