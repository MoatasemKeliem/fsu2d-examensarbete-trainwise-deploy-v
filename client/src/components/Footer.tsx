import { FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div id="footer">
            <div>
                <h3>INFO</h3>
                <Link to={`/contact`}><p>Contact</p></Link>
                <Link to={`/about`}><p>About</p></Link>
                <Link to={`/terms`}><p>Terms of Service</p></Link>
                <Link to={`Privacy`}><p>Privacy</p></Link>
            </div>
            <div>
                <h3>Follow us</h3>
                <div>
                    <FaInstagramSquare className="social-media" />
                    <FaFacebook className="social-media" />
                    <FaSquareXTwitter className="social-media" />
                </div>
            </div>
            <div>
                <form>
                    <label>
                        <input type="email" placeholder='Email...' />
                        <button>Subscribe</button>
                    </label>
                </form>
            </div>

        </div>
    )
}

export default Footer
