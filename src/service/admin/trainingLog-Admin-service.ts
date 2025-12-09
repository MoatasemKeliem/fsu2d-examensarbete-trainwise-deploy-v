import { AppDataSource } from "../../data-source";
import { Request, Response } from "express";
import { TrainingLog } from "../../entities/TrainingLog";



const trainingLogRepository = AppDataSource.getRepository(TrainingLog)


export const AdminGetAllTrainingLogs = async (req: Request, res: Response) => {

    try {


        const allTrainingLogs = await trainingLogRepository.find()

        return res.json({ status: 200, trainingLogs: allTrainingLogs })
    } catch (error) {
        console.error(`Error: Couldn't fetch training logs: ${error} `)
        res.json({ status: 500, message: "Couldn't get training logs." })
    }
}


export const AdminGetTrainingLogById = async (req: Request, res: Response) => {
    try {
        const trainingLogId = req.params.id;

        if (!trainingLogId) {
            return res.json({ status: 400, message: "ID for training log not found" })
        }

        const trainingLogById = await trainingLogRepository.findOne({ where: { id: trainingLogId } })

        if (!trainingLogById) {
            return res.json({ status: 400, message: "Training log not found" })
        }

        res.json({ status: 200, trainingLog: trainingLogById })
    } catch (error) {
        console.error(`Error: Couldn't fetch training log by ID: ${error} `)
        res.json({ status: 500, message: "Couldn't get training log." })
    }
}


export const AdminDeletetrainingLogById = async (req: Request, res: Response) => {
    try {
        const trainingLogId = req.params.id;

        if (!trainingLogId) {
            return res.json({ status: 400, message: "ID for training log not found" })
        }

        const trainingLogById = await trainingLogRepository.findOne({ where: { id: trainingLogId } })

        if (!trainingLogById) {
            return res.json({ status: 400, message: "Training log not found" })
        }

        await trainingLogRepository.delete(trainingLogId)

        res.json({ status: 200, message: `Training log with the ID of: ${trainingLogId} was deleted` })
    } catch (error) {
        console.error(`Error: Couldn't delete training log by ID: ${error} `)
        res.json({ status: 500, message: "Couldn't delete training log." })
    }
}