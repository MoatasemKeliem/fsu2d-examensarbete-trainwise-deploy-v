import { GoogleGenAI } from "@google/genai"
import dotenv from "dotenv"
import { AppDataSource } from "../../data-source"
import { Article } from "../../entities/Article"
import { IArticle } from "../../model/Article-model"

dotenv.config({ quiet: true })

const ai = new GoogleGenAI({})

export const generateArticle = async (userData: IArticle) => {

    const model = "gemini-2.5-flash-lite"

    const userPrompt = `
    Generate a detailed fitness article based on the following:

- Title: ${userData.title}
- Category: ${userData.category}

The article should be structured in sections with clear headings. 
Return the output as JSON with the following format:

{
  "title": string,
  "category": string,
  "sections": [
    {
      "heading": string,
      "content": string
    }
  ]
}

Each section should be 6-8 sentences long, easy to read, and provide actionable tips or insights. 
    `;


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

        let clearArticle = response.text || "";
        clearArticle = clearArticle?.replace(/^```json\s*/i, '')
        clearArticle = clearArticle?.replace(/\s*```\s*$/i, '');
        const article = JSON.parse(clearArticle)

        const articleRepository = AppDataSource.getRepository(Article)


        const newArticle = articleRepository.create({
            title: userData.title,
            category: userData.category,
            content: article
        })

        await articleRepository.save(newArticle)

        return newArticle

    } catch (error) {
        console.error("Couldn't generate article", error)
        return "ERROR: Couldn't generate article"
    }
}