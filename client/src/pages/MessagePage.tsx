import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AlreadySubscribed from '../components/stripeMessage/AlreadySubscribed';
import SuccessfullPayment from '../components/stripeMessage/SuccessfullPayment';
import CancelMessage from '../components/stripeMessage/CancelMessage';

const MessagePage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const message = location.state?.messageToShow;

    useEffect(() => {
        if (!message) {
            navigate("/pricing")
        }
    }, [message])

    if (message === "alreadySubscribed") {
        return <AlreadySubscribed />
    }

    if (message === "success") {
        return <SuccessfullPayment />

    }

    if (message === "cancelled") {
        return <CancelMessage />
    }


    return null
}

export default MessagePage
