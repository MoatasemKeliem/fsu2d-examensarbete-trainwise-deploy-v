import { AppDataSource } from "../../data-source";
import { Request, Response } from "express";
import { NutritionPlan } from "../../entities/NutritionPlan";



const nutritionPlanRepository = AppDataSource.getRepository(NutritionPlan)


export const getAllNutritionPlans = async (req: Request, res: Response) => {

    try {
        const userId = (req as any).userId

        if (!userId) {
            return res.status(400).json({ message: "user not found" })
        }

        const allNutritionPlans = await nutritionPlanRepository.find({ where: { user: { id: userId } } })

        return res.status(200).json({ nutritionPlan: allNutritionPlans })
    } catch (error) {
        console.error(`Error: Couldn't fetch nutrition plans: ${error} `)
        res.json({ status: 500, message: "Couldn't get nutrition plan." })
    }
}


export const getNutritionPlanById = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).userId;
        const nutritionPlanId = req.params.id;

        if (!userId) {
            return res.status(400).json({ message: "user not found" })
        }

        if (!nutritionPlanId) {
            return res.status(400).json({ message: "ID for nutrition plan not found" })
        }

        const nutritionPlanById = await nutritionPlanRepository.findOne({ where: { id: nutritionPlanId, user: { id: userId } } })

        if (!nutritionPlanById) {
            return res.status(400).json({ message: "Nutrition plan not found" })
        }

        return res.status(200).json({ nutritionPlan: nutritionPlanById })
    } catch (error) {
        console.error(`Error: Couldn't fetch nutrition plan by ID: ${error} `)
        res.json({ status: 500, message: "Couldn't get nutrition plan." })
    }
}


export const deletetNutritionPlanById = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).userId;
        const nutritionPlanId = req.params.id;

        if (!userId) {
            return res.status(400).json({ message: "user not found" })
        }

        if (!nutritionPlanId) {
            return res.status(400).json({ message: "ID for nutrition plan not found" })
        }

        const nutritionPlanById = await nutritionPlanRepository.findOne({ where: { id: nutritionPlanId, user: { id: userId } } })

        if (!nutritionPlanById) {
            return res.status(400).json({ message: "Nutrition plan not found" })
        }

        await nutritionPlanRepository.delete(nutritionPlanId)

        return res.status(200).json({ message: `Nutrition plan with the ID of: ${nutritionPlanId} was deleted` })
    } catch (error) {
        console.error(`Error: Couldn't delete nutrition plan by ID: ${error} `)
        res.json({ status: 500, message: "Couldn't delete nutrition plan." })
    }
}