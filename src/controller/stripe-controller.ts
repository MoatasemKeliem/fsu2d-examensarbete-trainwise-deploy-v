import { Request, Response } from "express"
import Stripe from "stripe"
import { AppDataSource } from "../data-source"
import { User } from "../entities/User"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export const stripePayment = async (req: Request, res: Response) => {
    const userId = (req as any).userId
    const { priceId } = req.body

    if (!userId) {
        return res.json({ status: 400, message: "User not found" })
    }

    try {
        const userRepository = AppDataSource.getRepository(User)

        const user = await userRepository.findOne({ where: { id: userId } })

        if (!user) {
            return res.json({ status: 400, message: "User not found" })
        }

        let stripeCustomerId = user.stripeCustomerId;

        if (!stripeCustomerId) {
            const customer = await stripe.customers.create({
                email: user.email!,
                metadata: { userId: user.id }
            })
            stripeCustomerId = customer?.id
            user.stripeCustomerId = customer?.id

            await userRepository.save(user)
        }

        const session = await stripe.subscriptions.create({
            customer: stripeCustomerId,
            items: [{ price: priceId, quantity: 1 }],
            payment_behavior: "default_incomplete",
            expand: ["latest_invoice.payment_intent"],
            metadata: {
                userId: user.id
            }


        })
        const invoice = session.latest_invoice as Stripe.Invoice & { payment_intent?: Stripe.PaymentIntent }
        const clientSecret = invoice.payment_intent?.client_secret

        return res.json({ subscriptionId: session.id, clientSecret })

    } catch (error) {
        console.error(error)
        return res.json({ status: 500, message: "Couldn't create payment" })
    }
}

export const stripeWebhook = async (req: Request, res: Response) => {
    const signal = req.body["stripe-signature"];
    const webhooksSecret = process.env.STRIPE_WEBHOOK_SECRET!;

    try {
        const event = stripe.webhooks.constructEvent(req.body, signal, webhooksSecret)

        if (event.type == "invoice.paid") {
            console.log("Invoice paid: ", event.data.object)
        } else if (event.type == "customer.subscription.deleted") {
            console.log("Subscription deleted: ", event.data.object)
        } else {
            console.log("Incomplete event: ", event.type)
        }

        return res.json({ status: 200, message: "Event accomplished" })

    } catch (error) {
        console.error("Webhook failed", error)
        return res.json({ status: 400, message: "Webook failed to verify" })
    }

}

