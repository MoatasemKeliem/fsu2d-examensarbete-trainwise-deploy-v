import { Router } from "express";
import { handelNutritionPlanGenerator, handelTrainingPlanGenerator } from "../controller/AI-controller";
import { authMiddleware } from "../middleware/auth-middleware";



const AIroutes = Router()

AIroutes.post("/generate-training-plan", authMiddleware, handelTrainingPlanGenerator)
AIroutes.post("/generate-nutrition-plan", authMiddleware, handelNutritionPlanGenerator)

export default AIroutes