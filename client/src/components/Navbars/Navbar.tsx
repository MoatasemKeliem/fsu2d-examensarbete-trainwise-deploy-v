import useAuth from "../../hooks/useAuth"
import AdminNavbar from "./AdminNavbar"
import GuestNavbar from "./GuestNavbar"
import UserNabar from "./UserNabar"

const Navbar = () => {
    const { isAuthenticated, role } = useAuth()


    return (
        <div>
            {
                isAuthenticated && role === "admin" ? <AdminNavbar /> : ""
            }
            {
                isAuthenticated && role === "user" ? <UserNabar /> : ""
            }

            {
                !isAuthenticated ? <GuestNavbar /> : ""
            }
        </div>
    )
}

export default Navbar
