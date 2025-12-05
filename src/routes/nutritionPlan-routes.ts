import { Router } from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { deletetNutritionPlanById, getAllNutritionPlans, getNutritionPlanById } from "../service/CRUD/nutritionPlan-CRUD-service";



const nutritionPlanRoutes = Router()

nutritionPlanRoutes.get("/", authMiddleware, getAllNutritionPlans)
nutritionPlanRoutes.get("/:id", authMiddleware, getNutritionPlanById)
nutritionPlanRoutes.delete("/id", authMiddleware, deletetNutritionPlanById)



export default nutritionPlanRoutes