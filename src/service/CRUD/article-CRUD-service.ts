import { AppDataSource } from "../../data-source";
import { Request, Response } from "express";
import { Article } from "../../entities/Article";



const articleRepository = AppDataSource.getRepository(Article)


export const getAllArticles = async (req: Request, res: Response) => {

    try {
        const allArticles = await articleRepository.find()

        return res.json({ status: 200, articles: allArticles })
    } catch (error) {
        console.error(`Error: Couldn't fetch articles: ${error} `)
        res.json({ status: 500, message: "Couldn't get articles." })
    }
}


export const getArticleById = async (req: Request, res: Response) => {
    try {
        const articleId = req.params.id;


        if (!articleId) {
            return res.json({ status: 400, message: "ID for article not found" })
        }

        const articleById = await articleRepository.findOne({ where: { id: articleId } })

        if (!articleById) {
            return res.json({ status: 400, message: "Training log not found" })
        }

        res.json({ status: 200, article: articleById })
    } catch (error) {
        console.error(`Error: Couldn't fetch article by ID: ${error} `)
        res.json({ status: 500, message: "Couldn't get article." })
    }
}


export const deleteArticleById = async (req: Request, res: Response) => {
    try {
        const articleId = req.params.id;

        if (!articleId) {
            return res.json({ status: 400, message: "ID for article not found" })
        }

        const articleById = await articleRepository.findOne({ where: { id: articleId } })

        if (!articleById) {
            return res.json({ status: 400, message: "article not found" })
        }

        await articleRepository.delete(articleById)

        res.json({ status: 200, message: `article with the ID of: ${articleId} was deleted` })
    } catch (error) {
        console.error(`Error: Couldn't delete article by ID: ${error} `)
        res.json({ status: 500, message: "Couldn't delete article." })
    }
}