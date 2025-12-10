import express from "express"
import { AppDataSource } from "./data-source";
import cookieParser from "cookie-parser";
import nativeRoute from "./routes/native-auth";
import { authMiddleware } from "./middleware/auth-middleware";
import OAuthRouter from "./routes/OAuth-routes";
import passport from "passport";
import "./config/passport"
import stripeRoute from "./routes/stripe-routes";
import { stripeWebhook } from "./controller/stripe-controller";
import AIroutes from "./routes/AI-routes";
import trainingPlanRoutes from "./routes/trainingPlan-routes";
import nutritionPlanRoutes from "./routes/nutritionPlan-routes";
import trainingLogRoutes from "./routes/trainingLog-routes";
import articleRoute from "./routes/article-routes";
import adminRoutes from "./routes/admin-routes";
import cors from "cors"

const app = express();
const PORT = 3000;


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.post("/stripe/webhook", express.raw({ type: "application/json" }), stripeWebhook)
app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize())
app.use("/native-auth", nativeRoute)
app.use(OAuthRouter)
app.use("/stripe", stripeRoute)
app.use("/ai", AIroutes)
app.use("/training-plan", trainingPlanRoutes)
app.use("/nutrition-plan", nutritionPlanRoutes)
app.use("/training-log", trainingLogRoutes)
app.use("/article", articleRoute)
app.use("/admin", adminRoutes)

app.get("/", authMiddleware, (req, res) => {
    res.send("Hello Examensarbetet!")
})

const startDatabase = async () => {
    try {
        await AppDataSource.initialize()
    } catch (error) {
        console.error("ERROR: Couldn't connect to database!", error)
    }
}

startDatabase()

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})