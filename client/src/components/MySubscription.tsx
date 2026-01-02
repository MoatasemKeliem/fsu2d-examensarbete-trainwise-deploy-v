import axios from 'axios';
import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const MySubscription = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { subscriptionId } = useAuth()
    const Backend_URL = import.meta.env.VITE_API_URL;

    const cancelSubscription = async (e: FormEvent) => {
        e.preventDefault()
        try {
            setLoading(true);


            const reposne = await axios.post(`${Backend_URL}/stripe/cancel-payment`, { subscriptionId }, { withCredentials: true })

            if (reposne.data.message === "Subscription canceled successfully") {
                navigate("/message-page", {
                    state: { messageToShow: "cancelled" }
                })
                return
            }
        } catch (error) {
            console.error("Couldn't cancel subscription", error)
        } finally {
            setLoading(false)
        }

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
                <button className='delete-button' type='submit'>Cancel Subscription</button>
            </form>
        </div>
    )
}

export default MySubscription
