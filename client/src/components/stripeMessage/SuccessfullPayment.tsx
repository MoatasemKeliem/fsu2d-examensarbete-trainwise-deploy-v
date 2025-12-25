import { IoMdCheckmarkCircle } from "react-icons/io"

const SuccessfullPayment = () => {
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
