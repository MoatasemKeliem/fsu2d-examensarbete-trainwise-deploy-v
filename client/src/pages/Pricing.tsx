import "../style/pricing.css"
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom"

const Pricing = () => {
    return (
        <section id="pricing">
            <div className="pricing-card">
                <h2 className="pricing-title">Basic</h2>
                <ul className="pricing-list">
                    <li><FaCheck className="icon" /> Generate training Plans</li>
                    <li><FaCheck className="icon" /> Generate Nutrition Plans</li>
                    <li><FaCheck className="icon" /> Track you progress with Training logs</li>
                    <li><FaCheck className="icon" /> Get feedback from AI coach</li>
                </ul>
                <p className="price">Price: 9.99$</p>
                <div className="button-div">
                    <Link to={``}><button className="subscribe-button">Subscribe Now</button></Link>
                </div>            </div>
            <div className="pricing-card" id="premium">
                <h2 className="pricing-title">Premium</h2>
                <ul className="pricing-list">
                    <li><FaCheck className="icon" /> Generate training Plans</li>
                    <li><FaCheck className="icon" /> Generate Nutrition Plans</li>
                    <li><FaCheck className="icon" /> Track you progress with Training logs</li>
                    <li><FaCheck className="icon" /> Get feedback from AI coach</li>
                    <li><FaCheck className="icon" /> Read Articles form industry experts</li>
                </ul>
                <p className="price">Price: 19.99$</p>
                <div className="button-div">
                    <Link to={``}><button className="subscribe-button">Subscribe Now</button></Link>
                </div>
            </div>
        </section>
    )
}

export default Pricing
