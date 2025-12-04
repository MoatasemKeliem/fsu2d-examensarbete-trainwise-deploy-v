import { GoogleGenAI } from "@google/genai"
import dotenv from "dotenv"
import { AppDataSource } from "../../data-source"
import { TrainingPlan } from "../../entities/TrainingPlan"
import { User } from "../../entities/User"

dotenv.config({ quiet: true })

const ai = new GoogleGenAI({})

export const generateTrainingPlan = async (userData: any, userId: string) => {

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
                systemInstruction: "You are a certified fitness coach specializing in personlized workout"
            }
        });

        const trainingPlanRepository = AppDataSource.getRepository(TrainingPlan)
        const userRepository = AppDataSource.getRepository(User)

        const user = await userRepository.findOne({ where: { id: userId } })

        if (!user) {
            throw new Error("User not found")
        }

        const newTrainingPlan = trainingPlanRepository.create({
            title: ``,
            plan: response.text,
            user
        })

        await trainingPlanRepository.save(newTrainingPlan)

        return newTrainingPlan

    } catch (error) {
        console.error("Couldn't generate training plan")
        return "ERROR: Couldn't generate training plan"
    }
}