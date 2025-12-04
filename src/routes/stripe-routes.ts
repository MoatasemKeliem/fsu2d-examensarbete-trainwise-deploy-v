import express, { Router } from "express"
import { cancelSubscription, stripePayment } from "../controller/stripe-controller"

const stripeRoute = Router()


stripeRoute.post("/create-payment", stripePayment)
stripeRoute.post("/cancel-payment", cancelSubscription)


export default stripeRoute;