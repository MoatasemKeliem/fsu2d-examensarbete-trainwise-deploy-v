import { Router } from "express";
import { handelArticleGenerator, handelNutritionPlanGenerator, handelTrainingLogGenerator, handelTrainingPlanGenerator } from "../controller/AI-controller";
import { authMiddleware } from "../middleware/auth-middleware";



const AIroutes = Router()

AIroutes.post("/generate-training-plan", authMiddleware, handelTrainingPlanGenerator)
AIroutes.post("/generate-nutrition-plan", authMiddleware, handelNutritionPlanGenerator)
AIroutes.post("/generate-training-log", authMiddleware, handelTrainingLogGenerator)
AIroutes.post("/generate-article", authMiddleware, handelArticleGenerator)

export default AIroutes