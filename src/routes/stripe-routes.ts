import { Router } from "express"
import { stripePayment } from "../controller/stripe-controller"

const stripeRoute = Router()


stripeRoute.post("/create-payment", stripePayment)


export default stripePayment;