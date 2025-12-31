import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios";
import { useState, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SuccessfullPayment from "./stripeMessage/SuccessfullPayment";
import AlreadySubscribed from "./stripeMessage/AlreadySubscribed";


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements()
    const navigate = useNavigate()
    const [alreadySubscribed, setAlreadySubscribed] = useState(false)
    const [successfulSubscription, setSuccessfulSubscription] = useState(false)
    const { priceId } = useParams()
    const Backend_URL = import.meta.env.VITE_API_URL;


    if (!priceId) {
        navigate("/pricing")
        return
    }


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!stripe || !elements) {
            console.error("Stripe elements or stripe is missing")
            return
        }

        const result = await stripe.confirmSetup({ elements, redirect: "if_required" })

        if (result.error) {
            console.error("Couldn't pay for subscription", result.error.message)
            return
        }


        const paymentMethodId = result.setupIntent?.payment_method;

        const reposne = await axios.post(`${Backend_URL}/stripe/create-payment`, { priceId, paymentMethodId }, { withCredentials: true })

        if (reposne.data.message === "You already have an actice subscription") {
            setAlreadySubscribed(true);
            setTimeout(() => {
                navigate("/dashboard")
            }, 5000)
            return
        }

        if (reposne.data.message === "Your payment was successful") {
            setSuccessfulSubscription(true);
            setTimeout(() => {
                navigate("/dashboard")
            }, 5000)
            return
        }

        alert("Payment successful")
        navigate("/dashboard")

    }

    if (successfulSubscription) {
        return (
            <div>
                <SuccessfullPayment />
            </div>
        )
    }

    if (alreadySubscribed) {
        return (
            <div>
                <AlreadySubscribed />
            </div>
        )
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <PaymentElement />
                <button id="pay-button" type="submit">Pay</button>
            </form>
        </div>
    )
}

export default CheckOutForm
