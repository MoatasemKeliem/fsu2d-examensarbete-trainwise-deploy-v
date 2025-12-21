import { NavLink } from 'react-router-dom'
import logo1 from "../../assets/TrainWise2.png"

const GuestNavbar = () => {

    return (
        <div>
            <nav className="navbar">
                <a id="logo" href="/">
                    <img id='logo-image' src={logo1} alt="image of trainwise logo" />
                </a>
                <ul className="nav-list">
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/"}>Home</NavLink></li>
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/contact"}>Contact</NavLink></li>
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/about"}>About</NavLink></li>
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/pricing"}>Pricing</NavLink></li>
                </ul>

                <ul className="nav-list">
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/login"}>Login</NavLink></li>
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/register"}>Register</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default GuestNavbar
