import express, { Router } from "express"
import { cancelSubscription, createPayment, stripePayment } from "../controller/stripe-controller"
import { authMiddleware } from "../middleware/auth-middleware"

const stripeRoute = Router()


stripeRoute.post("/create-payment", authMiddleware, stripePayment)
stripeRoute.post("/create-subscription", authMiddleware, createPayment)
stripeRoute.post("/cancel-payment", authMiddleware, cancelSubscription)


export default stripeRoute;