import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios";
import { type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";


const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements()
    const navigate = useNavigate()
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
            navigate("/message-page", {
                state: { messageToShow: "alreadySubscribed" }
            })
            return
        }

        if (reposne.data.message === "Your payment was successful") {
            navigate("/message-page", {
                state: { messageToShow: "success" }
            })
            return
        }

        alert("Payment successful")
        navigate("/dashboard")

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
