import useAuth from "../../hooks/useAuth"
import AdminNavbar from "./AdminNavbar"
import BasicUserNavbar from "./BasicUserNavbar"
import GuestNavbar from "./GuestNavbar"
import UserNabar from "./UserNabar"

const Navbar = () => {
    const { isAuthenticated, role, planName } = useAuth()

    if (!isAuthenticated) {
        return <GuestNavbar />
    }

    if (role === "admin") {
        return <AdminNavbar />
    }

    if (role === "user") {
        if (planName === "premium") {
            return <UserNabar />
        }

        return <BasicUserNavbar />
    }

    return null
}

export default Navbar
