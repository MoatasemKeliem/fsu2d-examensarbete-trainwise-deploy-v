import { AppDataSource } from "../../data-source";
import { Request, Response } from "express";
import { Article } from "../../entities/Article";



const articlePlanRepository = AppDataSource.getRepository(Article)


export const AdminGetAllArticle = async (req: Request, res: Response) => {

    try {
        const allArticles = await articlePlanRepository.find()

        return res.status(200).json({ article: allArticles })
    } catch (error) {
        console.error(`Error: Couldn't fetch article plans: ${error} `)
        return res.json({ status: 500, message: "Couldn't get article." })
    }
}


export const AdminGetArticleById = async (req: Request, res: Response) => {
    try {
        const articleId = req.params.id;


        if (!articleId) {
            return res.status(400).json({ message: "ID for article not found" })
        }

        const articleById = await articlePlanRepository.findOne({ where: { id: articleId } })

        if (!articleById) {
            return res.status(400).json({ message: "Article plan not found" })
        }

        return res.status(200).json({ article: articleById })
    } catch (error) {
        console.error(`Error: Couldn't fetch article by ID: ${error} `)
        return res.json({ status: 500, message: "Couldn't get article." })
    }
}


export const AdminDeletetArticleById = async (req: Request, res: Response) => {
    try {
        const articlePlanId = req.params.id;



        if (!articlePlanId) {
            return res.status(400).json({ message: "ID for article not found" })
        }

        const articlePlanById = await articlePlanRepository.findOne({ where: { id: articlePlanId } })

        if (!articlePlanById) {
            return res.status(400).json({ message: "article not found" })
        }

        await articlePlanRepository.delete(articlePlanId)

        return res.status(200).json({ message: `article plan with the ID of: ${articlePlanId} was deleted` })
    } catch (error) {
        console.error(`Error: Couldn't delete article by ID: ${error} `)
        return res.json({ status: 500, message: "Couldn't delete article." })
    }
}