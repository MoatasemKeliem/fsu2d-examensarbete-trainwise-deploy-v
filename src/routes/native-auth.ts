import { Router } from "express";
import { nativeLogin, nativeLogout, nativeRegister } from "../controller/native-auth";



const nativeRoute = Router()

nativeRoute.post("/register", nativeRegister)
nativeRoute.post("/login", nativeLogin)
nativeRoute.post("/logout", nativeLogout)

export default nativeRoute;