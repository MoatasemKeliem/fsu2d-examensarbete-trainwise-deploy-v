import { IoMdCheckmarkCircle } from 'react-icons/io'

const CancelMessage = () => {
    return (
        <div className="no-content-page">
            <div className="no-content">
                <IoMdCheckmarkCircle className="no-render-icon" />
                <h2 className="no-content-message">Your subscription was canceled successful.</h2>
            </div>
        </div>
    )
}

export default CancelMessage
