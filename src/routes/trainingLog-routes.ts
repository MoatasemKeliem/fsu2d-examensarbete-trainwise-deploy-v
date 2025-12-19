import { Router } from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { deletetrainingLogById, getAllTrainingLogs, getTrainingLogById } from "../service/CRUD/trainingLog-CRUD-service";
import { subscriptionMiddleware } from "../middleware/subscriptionMiddleware";



const trainingLogRoutes = Router()

trainingLogRoutes.get("/", authMiddleware, subscriptionMiddleware, getAllTrainingLogs)
trainingLogRoutes.get("/:id", authMiddleware, subscriptionMiddleware, getTrainingLogById)
trainingLogRoutes.delete("/:id", authMiddleware, subscriptionMiddleware, deletetrainingLogById)



export default trainingLogRoutes