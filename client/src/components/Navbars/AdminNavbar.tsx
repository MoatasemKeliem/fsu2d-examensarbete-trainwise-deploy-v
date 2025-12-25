import { NavLink } from 'react-router-dom'
import useAccount from '../../hooks/useAccount'
import logo1 from "../../assets/TrainWise2.png"


const AdminNavbar = () => {
    const { LogoutUser } = useAccount()

    return (
        <div>
            <nav className="navbar">
                <a id="logo" href="/">
                    <img id='logo-image' src={logo1} alt="image of trainwise logo" />
                </a>
                <ul className="nav-list">
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/dashboard"}>Home</NavLink></li>
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/articles"}>Article</NavLink></li>
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/training-plans"}>Training Plan</NavLink></li>
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/nutritions"}>Nutrition Plan</NavLink></li>
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/training-logs"}>Training Log</NavLink></li>
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/my-journey"}>My Journey</NavLink></li>
                    <li className="nav-list-item"><NavLink className={"nav-item"} to={"/admin"}>Admin</NavLink></li>
                </ul>

                <ul className="nav-list">
                    <button onClick={() => { LogoutUser() }}>Logout</button>
                </ul>
            </nav>
        </div>
    )
}

export default AdminNavbar
