import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios";
import { useState, type FormEvent } from "react";
import { Backend_URL } from "../utils";
import { useNavigate } from "react-router-dom";
import AlreadySubscribed from "./AlreadySubscribed";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements()
    const navigate = useNavigate()
    const [alreadySubscribed, setAlreadySubscribed] = useState(false)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!stripe || !elements) return

        const result = await stripe.confirmSetup({ elements, redirect: "if_required" })

        if (result.error) {
            console.error("Couldn't pay for subscription", result.error.message)
            return
        }

        const paymentMethodId = result.setupIntent?.payment_method;

        const reposne = await axios.post(`${Backend_URL}/stripe/create-payment`, { priceId: "price_1SaEY403YBWNs0AcBhptjUuj", paymentMethodId }, { withCredentials: true })

        if (reposne.data.message === "You already have an actice subscription") {
            setAlreadySubscribed(true);
            setTimeout(() => {
                navigate("/dashboard")
            }, 5000)
            return
        }

        alert("Payment successful")
        navigate("/dashboard")

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
                <button type="submit">Pay</button>
            </form>
        </div>
    )
}

export default CheckOutForm
