import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User";
import { Request, Response } from "express";




const userRepository = AppDataSource.getRepository(User)

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userRepository.find();

        const allUsers = users.map((user) => {
            return {
                ...user,
                password: ""
            }
        })

        return res.status(200).json({ users: allUsers })
    } catch (error) {
        console.error("Couldn't get all users")
        return res.json({ status: 500, message: "Users aren't avalible right now" })
    }

}



export const getUsersById = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        if (!id) {
            return res.status(400).json({ message: "User ID doesn't exist" })
        }

        const userById = await userRepository.findOne({ where: { id } })

        if (!userById) {
            return res.status(400).json({ message: "User not found" })
        }

        const user = { ...userById, password: "" }

        return res.status(200).json({ user })

    } catch (error) {
        console.error("Couldn't get all users")
        return res.status(500).json({ message: "Users aren't avalible right now" })
    }

}



export const deleteUsersById = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        if (!id) {
            return res.status(400).json({ message: "User ID doesn't exist" })
        }

        const user = await userRepository.findOne({ where: { id } })

        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }

        const userToDelete = { ...user, password: "" }

        await userRepository.delete(id)

        return res.status(200).json({ message: `User with the ID of: ${id} was deleted successfully`, user: userToDelete })

    } catch (error) {
        console.error("Couldn't get all users")
        return res.status(500).json({ message: "Users aren't avalible right now" })
    }

}