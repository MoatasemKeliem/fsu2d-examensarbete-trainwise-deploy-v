import { AppDataSource } from "../../data-source";
import { Request, Response } from "express";
import { Article } from "../../entities/Article";



const articleRepository = AppDataSource.getRepository(Article)


export const getAllArticles = async (req: Request, res: Response) => {

    try {
        const allArticles = await articleRepository.find()

        return res.status(200).json({ articles: allArticles })
    } catch (error) {
        console.error(`Error: Couldn't fetch articles: ${error} `)
        return res.status(500).json({ message: "Couldn't get articles." })
    }
}


export const getArticleById = async (req: Request, res: Response) => {
    try {
        const articleId = req.params.id;


        if (!articleId) {
            return res.status(400).json({ message: "ID for article not found" })
        }

        const articleById = await articleRepository.findOne({ where: { id: articleId } })

        if (!articleById) {
            return res.status(400).json({ message: "Training log not found" })
        }

        return res.status(200).json({ article: articleById })
    } catch (error) {
        console.error(`Error: Couldn't fetch article by ID: ${error} `)
        return res.status(500).json({ message: "Couldn't get article." })
    }
}


export const deleteArticleById = async (req: Request, res: Response) => {
    try {
        const articleId = req.params.id;

        if (!articleId) {
            return res.status(400).json({ message: "ID for article not found" })
        }

        const articleById = await articleRepository.findOne({ where: { id: articleId } })

        if (!articleById) {
            return res.status(400).json({ message: "article not found" })
        }

        await articleRepository.delete(articleById)

        return res.status(400).json({ message: `article with the ID of: ${articleId} was deleted` })
    } catch (error) {
        console.error(`Error: Couldn't delete article by ID: ${error} `)
        return res.status(500).json({ message: "Couldn't delete article." })
    }
}