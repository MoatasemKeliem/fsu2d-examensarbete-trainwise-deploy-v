import { AppDataSource } from "../../data-source";
import { Request, Response } from "express";
import { NutritionPlan } from "../../entities/NutritionPlan";



const nutritionPlanRepository = AppDataSource.getRepository(NutritionPlan)


export const AdminGetAllNutritionPlans = async (req: Request, res: Response) => {

    try {
        const allNutritionPlans = await nutritionPlanRepository.find({ relations: ["user"] })

        return res.status(200).json({ nutritionPlan: allNutritionPlans })
    } catch (error) {
        console.error(`Error: Couldn't fetch nutrition plans: ${error} `)
        return res.json({ status: 500, message: "Couldn't get nutrition plan." })
    }
}


export const AdminGetNutritionPlanById = async (req: Request, res: Response) => {
    try {
        const nutritionPlanId = req.params.id;


        if (!nutritionPlanId) {
            return res.status(400).json({ message: "ID for nutrition plan not found" })
        }

        const nutritionPlanById = await nutritionPlanRepository.findOne({ where: { id: nutritionPlanId } })

        if (!nutritionPlanById) {
            return res.status(400).json({ message: "Nutrition plan not found" })
        }

        return res.status(200).json({ nutritionPlan: nutritionPlanById })
    } catch (error) {
        console.error(`Error: Couldn't fetch nutrition plan by ID: ${error} `)
        return res.json({ status: 500, message: "Couldn't get nutrition plan." })
    }
}


export const AdminDeletetNutritionPlanById = async (req: Request, res: Response) => {
    try {
        const nutritionPlanId = req.params.id;



        if (!nutritionPlanId) {
            return res.status(400).json({ message: "ID for nutrition plan not found" })
        }

        const nutritionPlanById = await nutritionPlanRepository.findOne({ where: { id: nutritionPlanId } })

        if (!nutritionPlanById) {
            return res.status(400).json({ message: "Nutrition plan not found" })
        }

        await nutritionPlanRepository.delete(nutritionPlanId)

        return res.status(200).json({ message: `Nutrition plan with the ID of: ${nutritionPlanId} was deleted` })
    } catch (error) {
        console.error(`Error: Couldn't delete nutrition plan by ID: ${error} `)
        return res.json({ status: 500, message: "Couldn't delete nutrition plan." })
    }
}