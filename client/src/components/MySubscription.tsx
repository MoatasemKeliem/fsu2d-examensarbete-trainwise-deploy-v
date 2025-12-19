import axios from 'axios';
import { useState, type FormEvent } from 'react'
import { Backend_URL } from '../utils';
import { useNavigate } from 'react-router-dom';
import CancelMessage from './stripeMessage/CancelMessage';

const MySubscription = () => {
    const [loading, setLoading] = useState(false)
    const [cancelMessage, setCancelMessage] = useState(false)
    const navigate = useNavigate()

    const cancelSubscription = async (e: FormEvent) => {
        e.preventDefault()
        try {
            setLoading(true);


            const reposne = await axios.post(`${Backend_URL}/stripe/cancel-payment`, { subscriptionId: "sub_1Sfh7l03YBWNs0Ac0jN1WgeG" }, { withCredentials: true })

            if (reposne.data.message === "Subscription canceled successfully") {
                setCancelMessage(true);
                setTimeout(() => {
                    navigate("/dashboard")
                }, 5000)
                return
            }
        } catch (error) {
            console.error("Couldn't cancel subscription", error)
        } finally {
            setLoading(false)
        }

    }

    if (cancelMessage) {
        return (
            <div>
                <CancelMessage />
            </div>
        )
    }

    if (loading) {
        return (
            <div>
                <span className="loader"></span>
                <h2>Deleting Subscription. Please wait...</h2>
            </div>
        )
    }

    return (
        <div>
            <form onSubmit={cancelSubscription}>
                <button type='submit'>Cancel Subscription</button>
            </form>
        </div>
    )
}

export default MySubscription
