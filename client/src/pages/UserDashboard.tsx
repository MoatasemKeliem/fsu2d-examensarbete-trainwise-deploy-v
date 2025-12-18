import MySubscription from "../components/MySubscription"
import useAuth from "../hooks/useAuth"


const UserDashboard = () => {
    const { name, role } = useAuth()


    return (
        <div>
            <h1>Dashboard</h1>
            <h1>Hello {name}, you're logged in as {role}
            </h1>
            <div>
                <h2>Cancel Subscription</h2>
                <MySubscription />
            </div>

        </div>
    )
}

export default UserDashboard
