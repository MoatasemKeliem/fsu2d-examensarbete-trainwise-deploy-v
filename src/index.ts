import express from "express"
import { AppDataSource } from "./data-source";
import cookieParser from "cookie-parser";
import nativeRoute from "./routes/native-auth";
import { authMiddleware } from "./middleware/auth-middleware";
import OAuthRouter from "./routes/OAuth-routes";
import passport from "passport";
import "./config/passport"
import { stripePayment } from "./controller/stripe-controller";

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize())
app.use("/native-auth", nativeRoute)
app.use(OAuthRouter)
app.use("/stripe", stripePayment)

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