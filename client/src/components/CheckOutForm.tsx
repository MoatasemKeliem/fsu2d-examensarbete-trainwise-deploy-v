import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios";
import type { FormEvent } from "react";
import { Backend_URL } from "../utils";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!stripe || !elements) return

        const response = await axios.post(`${Backend_URL}/stripe/create-payment`, {}, { withCredentials: true })


        const { clientSecret } = response.data

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)!
            }
        })

        if (result.error) {
            console.error("Couldn't pay for subscription", result.error.message)
        }

    }




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit">Pay</button>
            </form>
        </div>
    )
}

export default CheckOutForm
