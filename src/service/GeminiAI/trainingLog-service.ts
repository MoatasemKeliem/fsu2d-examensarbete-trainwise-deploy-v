import { GoogleGenAI } from "@google/genai"
import dotenv from "dotenv"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/User"
import { TrainingLog } from "../../entities/TrainingLog"
import { ITrainingLog } from "../../model/TrainingLog-model"

dotenv.config({ quiet: true })

const ai = new GoogleGenAI({})

export const generateTrainingLog = async (userData: ITrainingLog, userId: string) => {

    const model = "gemini-2.5-flash-lite"

    const userPrompt = ``;


    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: [
                {
                    role: "user",
                    parts: [{ text: userPrompt }]
                },
            ],

            config: {
                systemInstruction: "You are a certified fitness coach and nutrition expert. You analyze user logs and provide feedback"
            }
        });

        const trainingLogRepository = AppDataSource.getRepository(TrainingLog)
        const userRepository = AppDataSource.getRepository(User)

        const user = await userRepository.findOne({ where: { id: userId } })

        if (!user) {
            throw new Error("User not found")
        }

        const newTrainingLog = trainingLogRepository.create({
            workoutSummary: response.text,
            aiFeedback: response.text,
            user
        })

        await trainingLogRepository.save(newTrainingLog)

        return newTrainingLog

    } catch (error) {
        console.error("Couldn't generate training log")
        return "ERROR: Couldn't generate training log"
    }
}