import { Elements } from "@stripe/react-stripe-js"
import CheckOutForm from "../components/CheckOutForm"
import { useEffect, useState } from "react"
import axios from "axios"
import { stripePromise } from "../utils"
import { FaCheckCircle } from "react-icons/fa"
import { useParams } from "react-router-dom"


const Subscription = () => {
    const [clientSecret, setClientSecret] = useState<string | null>(null)
    const Backend_URL = import.meta.env.VITE_API_URL;
    const { priceId } = useParams()
    const isPremiumPlan = priceId === "price_1SaEYU03YBWNs0AckJVboo3e";


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
        <div className="payment-page">
            <section className="payement-section">
                <Elements stripe={stripePromise}
                    options={{ clientSecret }}>
                    <div className="payment-div">
                        <div className="selling-points">
                            <h2>Subscribe</h2>
                            <div className="selling-text">
                                <p className="selling-point-p"><FaCheckCircle className="selling-point-icon " /><span>Instantly generate training plans</span></p>
                                <p className="selling-point-p"><FaCheckCircle className="selling-point-icon " /><span>Getenerate nutrition plans tailored to your goals</span></p>
                                <p className="selling-point-p"><FaCheckCircle className="selling-point-icon " /><span>Track your workouts and meals with instant feedback</span></p>
                                {
                                    isPremiumPlan &&
                                    <p className="selling-point-p"><FaCheckCircle className="selling-point-icon " /><span>Read articles weekly to inspire, motivate and teach you about fitness</span></p>
                                }
                            </div>
                        </div>
                        <CheckOutForm />
                    </div>

                </Elements>
            </section>

        </div>
    )
}

export default Subscription
