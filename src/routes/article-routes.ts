import { Router } from "express";
import { deleteArticleById, getAllArticles, getArticleById } from "../service/CRUD/article-CRUD-service";
import { authMiddleware } from "../middleware/auth-middleware";



const articleRoute = Router()


articleRoute.get("/", authMiddleware, getAllArticles)
articleRoute.get("/:id", authMiddleware, getArticleById)
articleRoute.delete("/:id", authMiddleware, deleteArticleById)


export default articleRoute;