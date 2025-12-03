import dotenv from "dotenv";
import { Router } from "express"
import passport from "passport"
import jwt from "jsonwebtoken"
import { User } from "../entities/User";

dotenv.config({ quiet: true })

const OAuthRouter = Router();

OAuthRouter.get("/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
)

OAuthRouter.get("/auth/google/callback",
    passport.authenticate("google", { session: false, failureRedirect: "/login" }),
    (req, res) => {
        const user = req.user as User

        if (!user) {
            return res.json({ status: 401, message: "Couldn't find user in Google" })
        }

        const token = jwt.sign({ email: user.email, userId: user.id, role: user.role }, process.env.JWT_SECRET!, {
            expiresIn: "1d"
        })

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 0
        })
    }
)


OAuthRouter.get("/auth/discord",
    passport.authenticate("discord", { scope: ["identify", "email"] })
)

OAuthRouter.get("/auth/discord/callback",
    passport.authenticate("discord", { session: false, failureRedirect: "/login" }),
    (req, res) => {
        const user = req.user as User

        if (!user) {
            return res.json({ status: 401, message: "Couldn't find user in Discord" })
        }

        const token = jwt.sign({ email: user.email, userId: user.id, role: user.role }, process.env.JWT_SECRET!, {
            expiresIn: "1d"
        })

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 0
        })
    }
)



export default OAuthRouter;