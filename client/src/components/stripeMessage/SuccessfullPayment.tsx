import { useEffect } from "react"
import { IoMdCheckmarkCircle } from "react-icons/io"
import { useNavigate } from "react-router-dom";

const SuccessfullPayment = () => {
    const navigate = useNavigate();



    useEffect(() => {
        const redirect = setTimeout(() => {
            navigate("/dashboard")
        }, 5000)

        return () => clearTimeout(redirect)
    }, [])

    return (
        <div className="no-content-page">
            <div className="no-content">

                <IoMdCheckmarkCircle className="no-render-icon" />
                <h2 className="no-content-message">You payment was successful. Enjoy your fitness journey</h2>
            </div>
        </div>
    )
}

export default SuccessfullPayment
