import { useEffect } from 'react';
import { IoMdCloseCircle } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

const CancelMessage = () => {
    const navigate = useNavigate();


    useEffect(() => {
        const redirect = setTimeout(() => {
            navigate("/pricing")
        }, 5000)

        return () => clearTimeout(redirect)
    }, [])

    return (
        <div className="no-content-page">
            <div className="no-content">
                <IoMdCloseCircle className="no-render-icon" />
                <h2 className="no-content-message">Your subscription was canceled successful.</h2>
            </div>
        </div>
    )
}

export default CancelMessage
