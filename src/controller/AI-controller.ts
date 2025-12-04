import { Request, Response } from "express";
import { ITrainingPlan } from "../model/TrainingPlan-model";
import { generateTrainingPlan } from "../service/GeminiAI/trainingPlan-service";

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