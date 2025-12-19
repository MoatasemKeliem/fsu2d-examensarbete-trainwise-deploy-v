import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Subscription } from "../entities/Subscription";

export const subscriptionMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId, role } = (req as any).user

        if (role === "admin") {
            return next()
        }

        const subscriptionRepository = AppDataSource.getRepository(Subscription);

        const activeSubscription = await subscriptionRepository.findOne({ where: { user: { id: userId }, status: "active" } })

        if (!activeSubscription) {
            return res.status(403).json({ message: "Inactive subscription" })
        }

        next()
    } catch (error) {
        console.error("Couldn't find subscription ");
        return res.status(500).json({
            message: "Couldn't find subscription"
        })
    }

}
