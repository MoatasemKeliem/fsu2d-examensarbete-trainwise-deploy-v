import dotenv from "dotenv";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { ITokenData } from "../model/Account-model";
import { Subscription } from "../entities/Subscription";

dotenv.config({ quiet: true })

export const nativeRegister = async (req: Request, res: Response) => {
    try {
        const userRepository = AppDataSource.getRepository(User)
        const { email, name, password } = req.body;
        const existingUser = await userRepository.findOne({ where: { email } })
        if (existingUser) {
            return res.status(400).json({ message: "user already exist" })
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

        return res.status(200).json({
            message: "User created successfully",
            id: newUser.id,
            email: newUser.email,
            name: newUser.name
        })

    } catch (error) {
        console.error("Couldn't create user", error)
        return res.status(500).json({
            message: "Couldn't create user"
        })
    }
}


export const nativeLogin = async (req: Request, res: Response) => {
    try {
        const userRepository = AppDataSource.getRepository(User)
        const { email, password } = req.body;
        const user = await userRepository.findOne({ where: { email } })
        if (!user || !user.password) {
            return res.status(401).json({ message: "User doesn't exist" })
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid login credentials" })

        }

        const token = jwt.sign({ email, userId: user.id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: "1d" })

        res.cookie("token", token, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production",
            secure: true,
            // sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            sameSite: "none",
            maxAge: 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            message: "User logged in successfully",
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        console.error("Couldn't login user")
        return res.status(500).json({
            message: "Couldn't login user"
        })
    }
}

export const nativeLogout = async (req: Request, res: Response) => {
    try {
        res.cookie("token", "", {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production",
            secure: true,
            // sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            sameSite: "none",
            maxAge: 0
        })
        return res.status(200).json({
            message: "User was logged out successfully"
        })
    } catch (error) {
        console.error("Couldn't logout user")
        return res.status(500).json({
            message: "Couldn't logout user"
        })
    }
}

export const veirfyUser = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: "Token was not found" })
        }

        const userRepository = AppDataSource.getRepository(User)
        const subscriptionRepository = AppDataSource.getRepository(Subscription);
        const decode = jwt.verify(token, process.env.JWT_SECRET!) as ITokenData
        const user = await userRepository.findOne({ where: { id: decode.userId } })

        if (!user) {
            return res.status(401).json({ message: "user not found" })
        }

        const userSubscription = await subscriptionRepository.findOne({ where: { user: { id: user.id } } })

        if (!userSubscription) {
            return res.status(200).json({ email: user.email, id: user.id, role: user.role, name: user.name, subscriptionStatus: "inactive", planName: "basic" })
        }

        return res.status(200).json({
            email: user.email, id: user.id, role: user.role, name: user.name,
            subscriptionStatus: userSubscription.status, planName: userSubscription.planName, subscriptionId: userSubscription.stripeSubscription
        })

    } catch (error) {
        console.error("Couldn't verify user", error)
        return res.status(500).json({
            message: "Couldn't verify user"
        })
    }

} 