import { GoogleGenAI } from "@google/genai"
import dotenv from "dotenv"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/User"
import { NutritionPlan } from "../../entities/NutritionPlan"

dotenv.config({ quiet: true })

const ai = new GoogleGenAI({})

export const generateNutritionPlan = async (userData: any, userId: string) => {

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
                systemInstruction: "You are a certified nutrition expert specializing in personlized nutrition plan"
            }
        });

        const nutritionPlanRepository = AppDataSource.getRepository(NutritionPlan)
        const userRepository = AppDataSource.getRepository(User)

        const user = await userRepository.findOne({ where: { id: userId } })

        if (!user) {
            throw new Error("User not found")
        }

        const newNutritionPlan = nutritionPlanRepository.create({
            title: `${userData.title}`,
            meals: response.text,
            user
        })

        await nutritionPlanRepository.save(newNutritionPlan)

        return newNutritionPlan

    } catch (error) {
        console.error("Couldn't generate nutrition plan")
        return "ERROR: Couldn't generate nutrition plan"
    }
}