import { Elements } from "@stripe/react-stripe-js"
import CheckOutForm from "../components/CheckOutForm"
import { Backend_URL, stripePromise } from "../utils"
import { useEffect, useState } from "react"
import axios from "axios"


const Subscription = () => {
    const [clientSecret, setClientSecret] = useState<string | null>(null)

    useEffect(() => {
        const createSetupIntent = async () => {
            const response = await axios.post(`${Backend_URL}/stripe/create-subscription`, { priceId: "price_1SaEY403YBWNs0AcBhptjUuj" }, { withCredentials: true })
            setClientSecret(response.data.setupIntent.client_secret)
        }
        createSetupIntent()
    }, [])

    if (!clientSecret) {
        return (
            <div>
                <span className="loader"></span>
                <h2>Createing payment. Please wait...</h2>
            </div>
        )
    }

    return (
        <div>
            <Elements stripe={stripePromise}
                options={{ clientSecret }}>
                <h1>Subscription</h1>
                <CheckOutForm />
            </Elements>
        </div>
    )
}

export default Subscription
