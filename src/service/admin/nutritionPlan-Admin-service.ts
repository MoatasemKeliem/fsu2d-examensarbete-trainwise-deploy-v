import { AppDataSource } from "../../data-source";
import { Request, Response } from "express";
import { NutritionPlan } from "../../entities/NutritionPlan";



const nutritionPlanRepository = AppDataSource.getRepository(NutritionPlan)


export const AdminGetAllNutritionPlans = async (req: Request, res: Response) => {

    try {



        const allNutritionPlans = await nutritionPlanRepository.find({ relations: ["user"] })

        return res.json({ status: 200, nutritionPlan: allNutritionPlans })
    } catch (error) {
        console.error(`Error: Couldn't fetch nutrition plans: ${error} `)
        res.json({ status: 500, message: "Couldn't get nutrition plan." })
    }
}


export const AdminGetNutritionPlanById = async (req: Request, res: Response) => {
    try {
        const nutritionPlanId = req.params.id;


        if (!nutritionPlanId) {
            return res.json({ status: 400, message: "ID for nutrition plan not found" })
        }

        const nutritionPlanById = await nutritionPlanRepository.findOne({ where: { id: nutritionPlanId } })

        if (!nutritionPlanById) {
            return res.json({ status: 400, message: "Nutrition plan not found" })
        }

        res.json({ status: 200, nutritionPlan: nutritionPlanById })
    } catch (error) {
        console.error(`Error: Couldn't fetch nutrition plan by ID: ${error} `)
        res.json({ status: 500, message: "Couldn't get nutrition plan." })
    }
}


export const AdminDeletetNutritionPlanById = async (req: Request, res: Response) => {
    try {
        const nutritionPlanId = req.params.id;



        if (!nutritionPlanId) {
            return res.json({ status: 400, message: "ID for nutrition plan not found" })
        }

        const nutritionPlanById = await nutritionPlanRepository.findOne({ where: { id: nutritionPlanId } })

        if (!nutritionPlanById) {
            return res.json({ status: 400, message: "Nutrition plan not found" })
        }

        await nutritionPlanRepository.delete(nutritionPlanId)

        res.json({ status: 200, message: `Nutrition plan with the ID of: ${nutritionPlanId} was deleted` })
    } catch (error) {
        console.error(`Error: Couldn't delete nutrition plan by ID: ${error} `)
        res.json({ status: 500, message: "Couldn't delete nutrition plan." })
    }
}