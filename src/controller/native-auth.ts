import dotenv from "dotenv";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import bcrypt from "bcrypt"

dotenv.config({ quiet: true })

export const nativeRegister = async (req: Request, res: Response) => {
    try {
        const userRepository = AppDataSource.getRepository(User)
        const { email, name, password } = req.body;
        const existingUser = await userRepository.findOne({ where: { email } })
        if (existingUser) {
            return res.json({ status: 400, message: "user already exist" })
        }

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = userRepository.create({
            email,
            name,
            password: hashPassword,
            role: "user",
            provider: "native",
            providerId: null
        })

        await userRepository.save(newUser)

        return res.json({
            status: 200,
            message: "User created successfully",
            id: newUser.id,
            email: newUser.email,
            name: newUser.name
        })

    } catch (error) {
        console.error("Couldn't create user", error)
        return res.json({
            status: 500,
            message: "Couldn't create user"
        })
    }
}

