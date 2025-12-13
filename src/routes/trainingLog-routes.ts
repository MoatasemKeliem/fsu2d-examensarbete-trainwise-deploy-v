import { Router } from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { deletetrainingLogById, getAllTrainingLogs, getTrainingLogById } from "../service/CRUD/trainingLog-CRUD-service";



const trainingLogRoutes = Router()

trainingLogRoutes.get("/", authMiddleware, getAllTrainingLogs)
trainingLogRoutes.get("/:id", authMiddleware, getTrainingLogById)
trainingLogRoutes.delete("/:id", authMiddleware, deletetrainingLogById)



export default trainingLogRoutes