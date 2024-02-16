import express from "express"
import { Request, Response } from "express"
import { createUser, getLoggedIn, login } from "../services/auth.service"
import { TAuthCredentials } from "../utils/types"
import { User } from "@prisma/client"
import { ErrorHandler } from "../utils/error-handler"
const router = express.Router()

router.post("/sign-in", async(req: Request, res: Response) => {
  const { email, password } = req.body as TAuthCredentials
  const user = await login({
    email,
    password
  })
  return res.send(user)
})

router.get("/profile", (req: Request, res: Response) => {
  const token = req.headers.authorization as string
  const user = getLoggedIn(token)
  return res.send(user)
})

// create new account
router.post("/signup", async (req: Request, res: Response) => {
  try {
    const reqData = req.body as User
    const resData = await createUser(reqData)
      .then((user) => {
        const {password, ...rest} = user
        return rest
      })
      .catch((err: unknown) => {
        throw new ErrorHandler((err as ErrorHandler).message, 500)
      })
    if (res)
      return res.status(201).send({
        status: 201,
        message: "User created successfully",
        data: resData
      })
  } catch (err: unknown) {
    return res.status(500).send({
      status: "error",
      message: (err as ErrorHandler).message
    })
  }
})

export default router
