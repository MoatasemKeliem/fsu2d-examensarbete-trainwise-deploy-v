import { ImSad2 } from "react-icons/im"
import { Link } from "react-router-dom"

const Unauthorized = () => {
    return (
        <div>
            <h1>Unauthorized</h1>
            <div className="no-content-page">
                <div className="no-content">
                    <ImSad2 className="no-render-icon" />
                    <h2 className="no-content-message">Sorry this page is not available for your account</h2>
                    <Link to={`/dashboard`}><button>Your dashboard</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Unauthorized
