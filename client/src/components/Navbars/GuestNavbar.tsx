import { NavLink } from 'react-router-dom'

const GuestNavbar = () => {

    return (
        <div>
            <nav className="navbar">
                <a id="logo" href="/">TainWise</a>
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
