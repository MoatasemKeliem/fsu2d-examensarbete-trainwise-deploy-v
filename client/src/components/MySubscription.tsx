import axios from 'axios';
import { useState } from 'react'
import { Backend_URL } from '../utils';

const MySubscription = () => {
    const [loading, setLoading] = useState(false)

    const cancelSubscription = async () => {
        try {
            setLoading(true);


            await axios.post(`${Backend_URL}/stripe/cancel-payment`, { subscriptionId: "sub_1Sfh7l03YBWNs0Ac0jN1WgeG" }, { withCredentials: true })
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
                <button type='submit'>Cancel Subscription</button>
            </form>
        </div>
    )
}

export default MySubscription
