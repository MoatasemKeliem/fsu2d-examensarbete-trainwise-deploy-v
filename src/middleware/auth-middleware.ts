import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config({ quiet: true })

export interface tokenRequest {
    email: string;
    userId: string;
    role: string;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "There is no token authorization denied"
        })
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET!) as tokenRequest
        (req as any).user = {
            userId: decode.userId,
            role: decode.role
        };

        (req as any).userId = decode.userId
        next()
    } catch (error) {
        console.error("Couldn't verify token");
        return res.status(500).json({
            message: "Couldn't verify token"
        })
    }
}