import { Link } from 'react-router-dom'
import { } from "../style/landingPage.css"
import { FaStar, FaDollarSign } from "react-icons/fa";
import image from "../assets/hero-image.jpg"
import { IoMdFitness } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";


const LandingPage = () => {
    return (
        <div>
            <section id='hero'>
                <img id='hero-image' src={image} alt="hero image" />
                <div id='hero-overlay'></div>
                <div id='hero-text-div'>
                    <h2>Take you fitness journey to the next level</h2>
                    <p>Personlized training plans, expert nutrition plans, workout and nutrition feedback in seconds and many more features.</p>
                    <div>
                        <Link to={`/register`}><button>Join Now</button></Link>
                        <Link to={`/pricing`}><button>See Pricing</button></Link>
                    </div>
                    <div id='sales-points'>
                        <div className='sales-points-divs'><h3>10k+</h3><p>Active users</p></div>
                        <div className='sales-points-divs'><h3>4.9 <FaStar className='star' /></h3><p>User Rating</p></div>
                        <div className='sales-points-divs'><h3>3+</h3><p>Fitness features</p></div>
                    </div>
                </div>
            </section>

            <section id='features'>
                <h3>Features</h3>

                <div id='features-container'>
                    <div id='features-card'>
                        <FaDollarSign className='features-icon' />
                        <h4>Pricing</h4>
                    </div>

                    <div id='features-card'>
                        <LuBrainCircuit className='features-icon' />
                        <h4>AI-Powered</h4>
                    </div>

                    <div id='features-card'>
                        <IoMdFitness className='features-icon' />
                        <h4>Fitness</h4>
                    </div>
                </div>

            </section>

            <section id='rating-section'>
                <h3>Rating</h3>

                <div id='rating-div'>
                    <h3>User </h3><FaStar className='star-rating' /><FaStar className='star-rating' /><FaStar className='star-rating' /><FaStar className='star-rating' /><FaStar className='star-rating' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rerum nobis dicta autem, itaque doloremque dignissimos atque laborum enim. Recusandae similique quam, eligendi perspiciatis veritatis quibusdam maiores quidem, adipisci, quasi voluptate alias? Temporibus pariatur quas ab non, officia nihil distinctio modi, vitae mollitia hic aut porro sit, ratione similique voluptas!</p>
                </div>
            </section>

            <section id='features'>
                <h3>Your Training Journey</h3>

                <div id='features-container'>
                    <div id='product-card'>
                        <h4>Training Plan</h4>
                        <ul>
                            <li>AI-generated workouts</li>
                            <li>Personlized to your goals</li>
                            <li>Adaptive progression</li>
                        </ul>
                    </div>

                    <div id='product-card'>
                        <h4>Nutrition Plan</h4>
                        <ul>
                            <li>AI-based meal plans</li>
                            <li>Goal focused nutrition</li>
                            <li>Easy to follow</li>
                        </ul>
                    </div>

                    <div id='product-card'>
                        <h4>Training log</h4>
                        <ul>
                            <li>Log workout and meals</li>
                            <li>AI perfomace analysis</li>
                            <li>AI feedback</li>
                        </ul>
                    </div>

                    <div id='product-card'>
                        <h4>Article</h4>
                        <ul>
                            <li>Expert insight</li>
                            <li>Training and nutrition tips</li>
                            <li>Weekly articles</li>
                        </ul>
                    </div>
                </div>
                <div id='join-now'>
                    <h4>Join now and enjoy your fitness journey</h4>
                    <Link id='join-now-button' to={`/register`}><button>Join Now</button></Link>

                </div>

            </section>
        </div>
    )
}

export default LandingPage
