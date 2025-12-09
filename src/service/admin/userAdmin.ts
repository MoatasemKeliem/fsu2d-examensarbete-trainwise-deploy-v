import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User";
import { Request, Response } from "express";




const userRepository = AppDataSource.getRepository(User)

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userRepository.find();

        return res.json({ status: 200, users })
    } catch (error) {
        console.error("Couldn't get all users")
        return res.json({ status: 500, message: "Users aren't avalible right now" })
    }

}



export const getUsersById = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        if (!id) {
            return res.json({ status: 400, message: "User ID doesn't exist" })
        }

        const user = await userRepository.findOne({ where: { id } })

        if (!user) {
            return res.json({ status: 404, message: "User not found" })
        }

        return res.json({ status: 200, user })

    } catch (error) {
        console.error("Couldn't get all users")
        return res.json({ status: 500, message: "Users aren't avalible right now" })
    }

}



export const deleteUsersById = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        if (!id) {
            return res.json({ status: 400, message: "User ID doesn't exist" })
        }

        const user = await userRepository.findOne({ where: { id } })

        if (!user) {
            return res.json({ status: 404, message: "User not found" })
        }

        await userRepository.delete(id)

        return res.json({ status: 200, message: "" })

    } catch (error) {
        console.error("Couldn't get all users")
        return res.json({ status: 500, message: "Users aren't avalible right now" })
    }

}