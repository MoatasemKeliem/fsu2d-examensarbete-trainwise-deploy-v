import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <a id="logo" href="/">TainWise</a>
                <ul className="nav-list">
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/articles"}>Article</NavLink></li>
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/training-plans"}>Training Plan</NavLink></li>
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/nutritions"}>Nutrition Plan</NavLink></li>
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/training-logs"}>Training Log</NavLink></li>
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/my-journey"}>My Journey</NavLink></li>
                </ul>

                <ul className="nav-list">
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/login"}>Login</NavLink></li>
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/register"}>Register</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
