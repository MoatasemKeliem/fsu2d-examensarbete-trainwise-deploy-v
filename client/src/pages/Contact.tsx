import { Link } from "react-router-dom"
import "../style/account.css"

const Contact = () => {
    return (
        <section className="account-page">
            <div>
                <form className='account-div'>
                    <h3>Contact Us</h3>
                    <label> Name <br />
                        <input type="text" placeholder="Name..." />
                    </label><br />

                    <label> Email <br />
                        <input type="email" placeholder="Email..." />
                    </label><br />


                    <label> Message<br />
                        <textarea name="" id="" placeholder="Your message..."></textarea>
                    </label><br />
                    <Link to={"/"}><button>Send Message</button></Link>

                </form>
            </div>
        </section>

    )
}

export default Contact
