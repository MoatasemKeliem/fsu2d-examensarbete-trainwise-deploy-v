import { Router } from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { AdminDeletetrainingPlanById, AdminGetAllTrainingPlans, AdminGetTrainingPlanById } from "../service/admin/trainingPlan-Admin-service";
import { AdminDeletetNutritionPlanById, AdminGetAllNutritionPlans, AdminGetNutritionPlanById } from "../service/admin/nutritionPlan-Admin-service";
import { AdminDeletetrainingLogById, AdminGetAllTrainingLogs, AdminGetTrainingLogById } from "../service/admin/trainingLog-Admin-service";



const adminRoutes = Router()

adminRoutes.get("/training-plan/", authMiddleware, AdminGetAllTrainingPlans)
adminRoutes.get("/training-plan/:id", authMiddleware, AdminGetTrainingPlanById)
adminRoutes.delete("/training-plan/:id", authMiddleware, AdminDeletetrainingPlanById)

adminRoutes.get("/nutrition-plan/", authMiddleware, AdminGetAllNutritionPlans)
adminRoutes.get("/nutrition-plan/:id", authMiddleware, AdminGetNutritionPlanById)
adminRoutes.delete("/nutrition-plan/:id", authMiddleware, AdminDeletetNutritionPlanById)

adminRoutes.get("/training-log/", authMiddleware, AdminGetAllTrainingLogs)
adminRoutes.get("/training-log/:id", authMiddleware, AdminGetTrainingLogById)
adminRoutes.delete("/training-log/:id", authMiddleware, AdminDeletetrainingLogById)

export default adminRoutes;