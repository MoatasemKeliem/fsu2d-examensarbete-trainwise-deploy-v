import { Request, Response } from "express"
import Stripe from "stripe"
import { AppDataSource } from "../data-source"
import { User } from "../entities/User"
import { Subscription } from "../entities/Subscription"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export const createPayment = async (req: Request, res: Response) => {
    const userId = (req as any).userId
    const { priceId } = req.body

    try {
        const userRepository = AppDataSource.getRepository(User)
        const user = await userRepository.findOne({ where: { id: userId } })

        if (!user) {
            return res.status(400).json({ message: "User not found" })
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

        const setupIntent = await stripe.setupIntents.create({
            customer: stripeCustomerId,
            automatic_payment_methods: { enabled: true }
        })

        return res.status(200).json({ setupIntent, priceId })


    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Couldn't create payment" })
    }
}


export const stripePayment = async (req: Request, res: Response) => {
    const userId = (req as any).userId
    const { priceId, paymentMethodId } = req.body

    if (!userId) {
        return res.json({ status: 400, message: "User not found" })
    }

    try {
        const userRepository = AppDataSource.getRepository(User)
        const subscriptionRepository = AppDataSource.getRepository(Subscription)


        const user = await userRepository.findOne({ where: { id: userId } })

        if (!user || !user.stripeCustomerId) {
            return res.status(400).json({ message: "User not found" })
        }

        const activeSubscription = await subscriptionRepository.findOne({ where: { user: { id: user.id }, status: "active" } })

        if (activeSubscription) {
            return res.json({ message: "You already have an actice subscription" })
        }

        const session = await stripe.subscriptions.create({
            customer: user.stripeCustomerId,
            items: [{ price: priceId, }],
            default_payment_method: paymentMethodId,
            expand: ["latest_invoice.payment_intent"],
            metadata: {
                userId: user.id
            }

        })
        const invoice = session.latest_invoice as Stripe.Invoice & { payment_intent?: Stripe.PaymentIntent }
        const clientSecret = invoice.payment_intent?.client_secret

        let planName: "basic" | "premium";

        if (priceId === "price_1SaEY403YBWNs0AcBhptjUuj") {
            planName = "basic";
        } else if (priceId === "price_1SaEYU03YBWNs0AckJVboo3e") {
            planName = "premium"
        } else {
            return res.status(400).json({ message: "Invalid plan" })
        }

        const subscriptionTable = subscriptionRepository.create({
            stripeSubscription: session.id,
            stripeCustomerId: user.stripeCustomerId,
            user,
            planId: priceId,
            planName,
            status: "active"
        })

        await subscriptionRepository.save(subscriptionTable);

        return res.json({ subscriptionId: session.id, clientSecret, message: "Your payment was successful" })

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Couldn't create payment" })
    }
}



export const cancelSubscription = async (req: Request, res: Response) => {
    const { subscriptionId } = req.body
    const userId = (req as any).userId


    if (!subscriptionId) {
        return res.status(400).json({ message: "Subscription ID not found" })
    }

    try {
        const deleteSubscription = await stripe.subscriptions.update(subscriptionId, { cancel_at_period_end: true })

        const subscriptionRepository = AppDataSource.getRepository(Subscription)

        const userRepository = AppDataSource.getRepository(User)

        const user = await userRepository.findOne({ where: { id: userId } })

        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }


        const subscription = await subscriptionRepository.findOne({
            where: {
                stripeSubscription: subscriptionId,
                user: { id: userId }
            }
        })

        if (!subscription) {
            return res.status(404).json({ message: "Subscription not found" })

        }

        subscription.status = "inactive"
        await subscriptionRepository.save(subscription)

        return res.status(200).json({
            message: "Subscription canceled successfully",
            subscription: deleteSubscription
        })
    } catch (error) {
        console.error("Cancel subscription failed", error)
        return res.status(500).json({ message: "Couldn't cancel subscription" })
    }
}

