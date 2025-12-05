import { Router } from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { deletetrainingPlanById, getAllTrainingPlans, getTrainingPlanById } from "../service/CRUD/trainingPlan-CRUD-service";



const trainingPlanRoutes = Router()

trainingPlanRoutes.get("/", authMiddleware, getAllTrainingPlans)
trainingPlanRoutes.get("/:id", authMiddleware, getTrainingPlanById)
trainingPlanRoutes.delete("/id", authMiddleware, deletetrainingPlanById)



export default trainingPlanRoutes