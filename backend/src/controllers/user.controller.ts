import express from "express"
import { Request, Response } from "express"
import { User } from "@prisma/client"
import { deleteAccount, getAllUsers, getUserByEmail, getUserById, removeAll, updateUser } from "../services/user.service"
const router = express.Router();

// update account
router.put('/update/:id', (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const reqData = req.body as User
        const resData = updateUser(id, reqData)
        return res.send({
            status: 200,
            message: 'User updated successfully',
            data: resData
        })
    }catch(err:unknown){
        res.status(500).send({
            status: 'error',
            message: (err as Error).message
        })
    }
})

// delete account
router.delete('/delete/:id', (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const resData = deleteAccount(id)
        return res.send({
            status: 200,
            message: 'User deleted successfully',
            data: resData
        })
    }catch(err:unknown){
        res.status(500).send({
            status: 'error',
            message: (err as Error).message
        })
    }
})

// delete all
router.delete('/delete-all', (req: Request, res: Response) => {
    try{
        const resData = removeAll()
        return res.send({
            status: 200,
            message: 'All users deleted successfully',
            data: resData
        })
    }catch(err:unknown){
        res.status(500).send({
            status: 'error',
            message: (err as Error).message
        })
    }
})

// get all users

router.get('/get-users', async (req: Request, res: Response) => {
    try{
        const resData = await getAllUsers()
        return res.send({
            status: 200,
            message: 'Users fetched successfully',
            data: resData
        })
    }catch(err:unknown){
        res.status(500).send({
            status: 'error',
            message: (err as Error).message
        })
    }
})

// get user by email
router.get('/by-email/:email', (req: Request, res: Response) => {
    try{
        const email = req.params.email
        const resData = getUserByEmail(email)
        return res.send({
            status: 200,
            message: 'User fetched successfully',
            data: resData
        })
    }catch(err:unknown){
        res.status(500).send({
            status: 'error',
            message: (err as Error).message
        })
    }
})

// get user by id
router.get('/by-id/:id', (req: Request, res: Response) => {
    try{
        const id = req.params.id
        const resData = getUserById(id)
        return res.send({
            status: 200,
            message: 'User fetched successfully',
            data: resData
        })
    }catch(err:unknown){
        res.status(500).send({
            status: 'error',
            message: (err as Error).message
        })
    }
})

export default router;