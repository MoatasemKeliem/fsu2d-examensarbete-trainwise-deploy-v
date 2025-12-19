import { Router } from "express";
import { handelArticleGenerator, handelNutritionPlanGenerator, handelTrainingLogGenerator, handelTrainingPlanGenerator } from "../controller/AI-controller";
import { authMiddleware } from "../middleware/auth-middleware";
import { subscriptionMiddleware } from "../middleware/subscriptionMiddleware";
import { adminMiddleware } from "../middleware/adminMiddleware";



const AIroutes = Router()

AIroutes.post("/generate-training-plan", authMiddleware, subscriptionMiddleware, handelTrainingPlanGenerator)
AIroutes.post("/generate-nutrition-plan", authMiddleware, subscriptionMiddleware, handelNutritionPlanGenerator)
AIroutes.post("/generate-training-log", authMiddleware, subscriptionMiddleware, handelTrainingLogGenerator)
AIroutes.post("/generate-article", authMiddleware, adminMiddleware, handelArticleGenerator)

export default AIroutes