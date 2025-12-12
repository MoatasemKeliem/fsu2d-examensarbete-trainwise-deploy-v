import { Router } from "express";
import { nativeLogin, nativeLogout, nativeRegister, veirfyUser } from "../controller/native-auth";



const nativeRoute = Router()

nativeRoute.post("/register", nativeRegister)
nativeRoute.post("/login", nativeLogin)
nativeRoute.post("/logout", nativeLogout)
nativeRoute.get("/verify", veirfyUser)

export default nativeRoute;