import { AppDataSource } from "../../data-source";
import { TrainingPlan } from "../../entities/TrainingPlan";
import { Request, Response } from "express";



const trainingPlanRepository = AppDataSource.getRepository(TrainingPlan)


export const AdminGetAllTrainingPlans = async (req: Request, res: Response) => {

    try {
        const allTrainingPlans = await trainingPlanRepository.find({ relations: ["user"] })

        return res.status(200).json({ trainingPlan: allTrainingPlans })
    } catch (error) {
        console.error(`Error: Couldn't fetch training plans: ${error} `)
        return res.json({ status: 500, message: "Couldn't get training plan." })
    }
}


export const AdminGetTrainingPlanById = async (req: Request, res: Response) => {
    try {
        const trainingPlanId = req.params.id;


        if (!trainingPlanId) {
            return res.status(400).json({ message: "ID for training plan not found" })
        }

        const trainingPlanById = await trainingPlanRepository.findOne({ where: { id: trainingPlanId } })

        if (!trainingPlanById) {
            return res.status(400).json({ message: "Training plan not found" })
        }

        return res.status(200).json({ trainingPlan: trainingPlanById })
    } catch (error) {
        console.error(`Error: Couldn't fetch training plan by ID: ${error} `)
        return res.json({ status: 500, message: "Couldn't get training plan." })
    }
}


export const AdminDeletetrainingPlanById = async (req: Request, res: Response) => {
    try {
        const trainingPlanId = req.params.id;

        if (!trainingPlanId) {
            return res.status(400).json({ message: "ID for training plan not found" })
        }

        const trainingPlanById = await trainingPlanRepository.findOne({ where: { id: trainingPlanId } })

        if (!trainingPlanById) {
            return res.status(200).json({ message: "Training plan not found" })
        }

        await trainingPlanRepository.delete(trainingPlanId)

        return res.status(200).json({ message: `Training plan with the ID of: ${trainingPlanId} was deleted` })
    } catch (error) {
        console.error(`Error: Couldn't delete training plan by ID: ${error} `)
        return res.json({ status: 500, message: "Couldn't delete training plan." })
    }
}