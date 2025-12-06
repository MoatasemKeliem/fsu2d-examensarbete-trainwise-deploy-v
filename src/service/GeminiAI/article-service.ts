import { GoogleGenAI } from "@google/genai"
import dotenv from "dotenv"
import { AppDataSource } from "../../data-source"
import { Article } from "../../entities/Article"
import { IArticle } from "../../model/Article-model"

dotenv.config({ quiet: true })

const ai = new GoogleGenAI({})

export const generateArticle = async (userData: IArticle, userId: string) => {

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
                systemInstruction: "You are a professional fitness writer and expert"
            }
        });

        const articleRepository = AppDataSource.getRepository(Article)


        const newArticle = articleRepository.create({
            title: userData.title,
            category: userData.catgeory,
            content: response.data
        })

        await articleRepository.save(newArticle)

        return newArticle

    } catch (error) {
        console.error("Couldn't generate article")
        return "ERROR: Couldn't generate article"
    }
}