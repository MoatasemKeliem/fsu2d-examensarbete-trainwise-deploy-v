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
    passport.authenticate("google", { session: false, failureRedirect: `${process.env.FRONTEND_URL}/login` }),
    (req, res) => {
        const user = req.user as User

        if (!user) {
            res.redirect(`${process.env.FRONTEND_URL}/login`)
            return res.json({ status: 401, message: "Couldn't find user in Google" })
        }

        const token = jwt.sign({ email: user.email, userId: user.id, role: user.role }, process.env.JWT_SECRET!, {
            expiresIn: "1d"
        })

        res.cookie("token", token, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production",
            secure: true,
            // sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            sameSite: "none",
            maxAge: 24 * 60 * 60 * 1000
        })

        res.redirect(`${process.env.FRONTEND_URL}/dashboard`)
    }
)


OAuthRouter.get("/auth/discord",
    passport.authenticate("discord", { scope: ["identify", "email"] })
)

OAuthRouter.get("/auth/discord/callback",
    passport.authenticate("discord", { session: false }),
    (req, res) => {
        const user = req.user as User

        if (!user) {
            res.redirect(`${process.env.FRONTEND_URL}/login`)
            return res.json({ status: 401, message: "Couldn't find user in Discord" })
        }

        const token = jwt.sign({ email: user.email, userId: user.id, role: user.role }, process.env.JWT_SECRET!, {
            expiresIn: "1d"
        })

        res.cookie("token", token, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production",
            secure: true,
            // sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            sameSite: "none",
            maxAge: 24 * 60 * 60 * 1000
        })

        res.redirect(`${process.env.FRONTEND_URL}/dashboard`)

    }
)



export default OAuthRouter;