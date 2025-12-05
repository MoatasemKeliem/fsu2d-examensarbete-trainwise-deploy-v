import { Request, Response } from "express";
import { ITrainingPlan } from "../model/TrainingPlan-model";
import { generateTrainingPlan } from "../service/GeminiAI/trainingPlan-service";
import { generateNutritionPlan } from "../service/GeminiAI/nutritionPlan-service";
import { INutritionPlan } from "../model/NutritionPlan-model";
import { ITrainingLog } from "../model/TrainingLog-model";
import { generateTrainingLog } from "../service/GeminiAI/trainingLog-service";

export const handelTrainingPlanGenerator = async (req: Request, res: Response) => {
    const userId = (req as any).userId

    try {
        const userData: ITrainingPlan = req.body

        if (!userData) {
            return res.json({ status: 400, message: "No valid input to create training plan" })
        }

        const generatedTrainingPlan = await generateTrainingPlan(userData, userId)

        res.json({ status: 200, training_plan: generatedTrainingPlan })
    } catch (error) {
        console.error("Error from handelTrainingPlanGenerator in controller")
        res.json({ status: 500, message: "Couldn't generate error from controller" })
    }
}

export const handelNutritionPlanGenerator = async (req: Request, res: Response) => {
    const userId = (req as any).userId

    try {
        const userData: INutritionPlan = req.body

        if (!userData) {
            return res.json({ status: 400, message: "Not valid input to create nutrition plan" })
        }

        const generatedNutritionPlan = await generateNutritionPlan(userData, userId)

        res.json({ status: 200, training_plan: generatedNutritionPlan })
    } catch (error) {
        console.error("Error from handelNutritionPlanGenerator in controller")
        res.json({ status: 500, message: "Couldn't generate nutrition plan, error from controller" })
    }
}


export const handelTrainingLogGenerator = async (req: Request, res: Response) => {
    const userId = (req as any).userId

    try {
        const userData: ITrainingLog = req.body

        if (!userData) {
            return res.json({ status: 400, message: "No valid input to create training log" })
        }

        const generatedTrainingLog = await generateTrainingLog(userData, userId)

        res.json({ status: 200, training_log: generatedTrainingLog })
    } catch (error) {
        console.error("Error from handelTrainingLogGenerator in controller")
        res.json({ status: 500, message: "Couldn't generate error from controller" })
    }
}
