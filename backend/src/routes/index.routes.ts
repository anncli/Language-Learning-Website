import express from 'express'
import authController from '../controllers/auth.controller'
import userController from '../controllers/user.controller'

const router = express.Router();

router.use("/auth",authController)
router.use("/user",userController)

export default router