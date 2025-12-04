import { Router } from "express";
import { handelTrainingPlanGenerator } from "../controller/AI-controller";
import { authMiddleware } from "../middleware/auth-middleware";



const AIroutes = Router()

AIroutes.post("/generate-training-plan", authMiddleware, handelTrainingPlanGenerator)

export default AIroutes