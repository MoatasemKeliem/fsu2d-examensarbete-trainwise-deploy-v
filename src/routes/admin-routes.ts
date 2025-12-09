import { Router } from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { AdminDeletetrainingPlanById, AdminGetAllTrainingPlans, AdminGetTrainingPlanById } from "../service/admin/trainingPlan-Admin-service";



const adminRoutes = Router()

adminRoutes.get("/training-plan/", authMiddleware, AdminGetAllTrainingPlans)
adminRoutes.get("/training-plan/:id", authMiddleware, AdminGetTrainingPlanById)
adminRoutes.delete("/training-plan/:id", authMiddleware, AdminDeletetrainingPlanById)



export default adminRoutes;