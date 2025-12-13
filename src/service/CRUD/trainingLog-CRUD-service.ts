import { AppDataSource } from "../../data-source";
import { Request, Response } from "express";
import { TrainingLog } from "../../entities/TrainingLog";



const trainingLogRepository = AppDataSource.getRepository(TrainingLog)


export const getAllTrainingLogs = async (req: Request, res: Response) => {

    try {
        const userId = (req as any).userId

        if (!userId) {
            return res.status(400).json({ message: "user not found" })
        }

        const allTrainingLogs = await trainingLogRepository.find({ where: { user: { id: userId } } })

        return res.status(200).json({ trainingLogs: allTrainingLogs })
    } catch (error) {
        console.error(`Error: Couldn't fetch training logs: ${error} `)
        res.json({ status: 500, message: "Couldn't get training logs." })
    }
}


export const getTrainingLogById = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).userId;
        const trainingLogId = req.params.id;

        if (!userId) {
            return res.status(400).json({ message: "user not found" })
        }

        if (!trainingLogId) {
            return res.status(400).json({ message: "ID for training log not found" })
        }

        const trainingLogById = await trainingLogRepository.findOne({ where: { id: trainingLogId, user: { id: userId } } })

        if (!trainingLogById) {
            return res.status(400).json({ message: "Training log not found" })
        }

        return res.status(200).json({ trainingLog: trainingLogById })
    } catch (error) {
        console.error(`Error: Couldn't fetch training log by ID: ${error} `)
        res.json({ status: 500, message: "Couldn't get training log." })
    }
}


export const deletetrainingLogById = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).userId;
        const trainingLogId = req.params.id;

        if (!userId) {
            return res.status(400).json({ message: "user not found" })
        }

        if (!trainingLogId) {
            return res.status(400).json({ message: "ID for training log not found" })
        }

        const trainingLogById = await trainingLogRepository.findOne({ where: { id: trainingLogId, user: { id: userId } } })

        if (!trainingLogById) {
            return res.status(400).json({ message: "Training log not found" })
        }

        await trainingLogRepository.delete(trainingLogId)

        res.status(200).json({ message: `Training log with the ID of: ${trainingLogId} was deleted` })
    } catch (error) {
        console.error(`Error: Couldn't delete training log by ID: ${error} `)
        res.json({ status: 500, message: "Couldn't delete training log." })
    }
}