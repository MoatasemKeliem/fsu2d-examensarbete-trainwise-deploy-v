import { Router } from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { AdminDeletetrainingPlanById, AdminGetAllTrainingPlans, AdminGetTrainingPlanById } from "../service/admin/trainingPlan-Admin-service";
import { AdminDeletetNutritionPlanById, AdminGetAllNutritionPlans, AdminGetNutritionPlanById } from "../service/admin/nutritionPlan-Admin-service";
import { AdminDeletetrainingLogById, AdminGetAllTrainingLogs, AdminGetTrainingLogById } from "../service/admin/trainingLog-Admin-service";
import { adminMiddleware } from "../middleware/adminMiddleware";
import { deleteUsersById, getAllUsers, getUsersById } from "../service/admin/userAdmin";



const adminRoutes = Router()

adminRoutes.get("/training-plan/", authMiddleware, adminMiddleware, AdminGetAllTrainingPlans)
adminRoutes.get("/training-plan/:id", authMiddleware, adminMiddleware, AdminGetTrainingPlanById)
adminRoutes.delete("/training-plan/:id", authMiddleware, adminMiddleware, AdminDeletetrainingPlanById)

adminRoutes.get("/nutrition-plan/", authMiddleware, adminMiddleware, AdminGetAllNutritionPlans)
adminRoutes.get("/nutrition-plan/:id", authMiddleware, adminMiddleware, AdminGetNutritionPlanById)
adminRoutes.delete("/nutrition-plan/:id", authMiddleware, adminMiddleware, AdminDeletetNutritionPlanById)

adminRoutes.get("/training-log/", authMiddleware, adminMiddleware, AdminGetAllTrainingLogs)
adminRoutes.get("/training-log/:id", authMiddleware, adminMiddleware, AdminGetTrainingLogById)
adminRoutes.delete("/training-log/:id", authMiddleware, adminMiddleware, AdminDeletetrainingLogById)

adminRoutes.get("/user/", authMiddleware, adminMiddleware, getAllUsers)
adminRoutes.get("/user/:id", authMiddleware, adminMiddleware, getUsersById)
adminRoutes.delete("/user/:id", authMiddleware, adminMiddleware, deleteUsersById)

export default adminRoutes;