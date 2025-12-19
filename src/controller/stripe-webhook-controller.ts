import { Request, Response } from "express"
import Stripe from "stripe"
import { AppDataSource } from "../data-source"
import { Subscription } from "../entities/Subscription"

export const stripeWebhook = async (req: Request, res: Response) => {
    const signal = req.headers["stripe-signature"] as string;
    const webhooksSecret = process.env.STRIPE_WEBHOOK_SECRET!;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)


    try {
        const event = stripe.webhooks.constructEvent(req.body, signal, webhooksSecret)

        const subscriptionRepository = AppDataSource.getRepository(Subscription)

        if (event.type === "invoice.paid") {
            const invoice = event.data.object as Stripe.Invoice & { subscription?: string }
            const subscriptionId = invoice.subscription

            if (subscriptionId) {
                const subscription = await subscriptionRepository.findOne({ where: { stripeSubscription: subscriptionId } })

                if (subscription) {
                    subscription.status = "active";
                    await subscriptionRepository.save(subscription)
                    console.log("Subscription atcivated: ", event.data.object)

                }
            }

        } else if (event.type === "customer.subscription.updated") {
            const deletedSubscription = event.data.object as Stripe.Subscription
            const subscriptionId = deletedSubscription.id

            if (subscriptionId) {
                const subscription = await subscriptionRepository.findOne({ where: { stripeSubscription: subscriptionId } })

                if (subscription) {
                    subscription.status = "inactive";
                    await subscriptionRepository.save(subscription)
                    console.log("Subscription deleted: ", event.data.object)
                }
            }
        } else {
            console.log("Incomplete event: ", event.type)
        }

        return res.json({ status: 200, message: "Event accomplished" })

    } catch (error) {
        console.error("Webhook failed", error)
        return res.json({ status: 500, message: "Webook failed to verify" })
    }

}