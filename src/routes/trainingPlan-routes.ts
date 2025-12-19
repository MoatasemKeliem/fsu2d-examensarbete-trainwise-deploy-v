import { Router } from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { deletetrainingPlanById, getAllTrainingPlans, getTrainingPlanById } from "../service/CRUD/trainingPlan-CRUD-service";
import { subscriptionMiddleware } from "../middleware/subscriptionMiddleware";



const trainingPlanRoutes = Router()

trainingPlanRoutes.get("/", authMiddleware, subscriptionMiddleware, getAllTrainingPlans)
trainingPlanRoutes.get("/:id", authMiddleware, subscriptionMiddleware, getTrainingPlanById)
trainingPlanRoutes.delete("/:id", authMiddleware, subscriptionMiddleware, deletetrainingPlanById)



export default trainingPlanRoutes