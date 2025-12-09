import dotenv from "dotenv"
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"


dotenv.config({ quiet: true })

export const adminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token

    if (!token) {
        return res.json({ status: 401, message: "There is no token for this user" })
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET!) as any
        if (decode.role !== "admin") {
            return res.json({ status: 403, message: "Access Denied: You have to be admin" })
        }
        (req as any).role = decode.role
        next()
    } catch (error) {
        console.error("Admin middlware error")
        return res.json({ status: 500, message: "Couldn't validate token" })
    }
}