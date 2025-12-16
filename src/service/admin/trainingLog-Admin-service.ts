import { AppDataSource } from "../../data-source";
import { Request, Response } from "express";
import { TrainingLog } from "../../entities/TrainingLog";



const trainingLogRepository = AppDataSource.getRepository(TrainingLog)


export const AdminGetAllTrainingLogs = async (req: Request, res: Response) => {

    try {
        const allTrainingLogs = await trainingLogRepository.find({ relations: ["user"] })



        return res.status(200).json({ trainingLogs: allTrainingLogs })
    } catch (error) {
        console.error(`Error: Couldn't fetch training logs: ${error} `)
        return res.json({ status: 500, message: "Couldn't get training logs." })
    }
}


export const AdminGetTrainingLogById = async (req: Request, res: Response) => {
    try {
        const trainingLogId = req.params.id;

        if (!trainingLogId) {
            return res.status(400).json({ message: "ID for training log not found" })
        }

        const trainingLogById = await trainingLogRepository.findOne({ where: { id: trainingLogId } })

        if (!trainingLogById) {
            return res.status(400).json({ message: "Training log not found" })
        }

        return res.status(200).json({ trainingLog: trainingLogById })
    } catch (error) {
        console.error(`Error: Couldn't fetch training log by ID: ${error} `)
        return res.json({ status: 500, message: "Couldn't get training log." })
    }
}


export const AdminDeletetrainingLogById = async (req: Request, res: Response) => {
    try {
        const trainingLogId = req.params.id;

        if (!trainingLogId) {
            return res.status(400).json({ message: "ID for training log not found" })
        }

        const trainingLogById = await trainingLogRepository.findOne({ where: { id: trainingLogId } })

        if (!trainingLogById) {
            return res.status(400).json({ message: "Training log not found" })
        }

        await trainingLogRepository.delete(trainingLogId)

        return res.status(200).json({ message: `Training log with the ID of: ${trainingLogId} was deleted` })
    } catch (error) {
        console.error(`Error: Couldn't delete training log by ID: ${error} `)
        return res.json({ status: 500, message: "Couldn't delete training log." })
    }
}