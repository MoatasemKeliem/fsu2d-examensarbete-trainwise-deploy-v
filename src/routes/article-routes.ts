import { Router } from "express";
import { deleteArticleById, getAllArticles, getArticleById } from "../service/CRUD/article-CRUD-service";
import { authMiddleware } from "../middleware/auth-middleware";
import { subscriptionMiddleware } from "../middleware/subscriptionMiddleware";



const articleRoute = Router()


articleRoute.get("/", authMiddleware, subscriptionMiddleware, getAllArticles)
articleRoute.get("/:id", authMiddleware, subscriptionMiddleware, getArticleById)
articleRoute.delete("/:id", authMiddleware, subscriptionMiddleware, deleteArticleById)


export default articleRoute;