import { Router } from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { deletetNutritionPlanById, getAllNutritionPlans, getNutritionPlanById } from "../service/CRUD/nutritionPlan-CRUD-service";
import { subscriptionMiddleware } from "../middleware/subscriptionMiddleware";



const nutritionPlanRoutes = Router()

nutritionPlanRoutes.get("/", authMiddleware, subscriptionMiddleware, getAllNutritionPlans)
nutritionPlanRoutes.get("/:id", authMiddleware, subscriptionMiddleware, getNutritionPlanById)
nutritionPlanRoutes.delete("/:id", authMiddleware, subscriptionMiddleware, deletetNutritionPlanById)



export default nutritionPlanRoutes