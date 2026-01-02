import { Link } from "react-router-dom"
import MySubscription from "../components/MySubscription"
import RenderPlansDashboard from "../components/RenderPlansDashboard"
import useAuth from "../hooks/useAuth"


const UserDashboard = () => {
    const { name, subscriptionStatus, role } = useAuth()




    return (
        <div className="dashboard-page">
            <section className="dashboard">
                <h1>Welcome, {name}</h1>
                {subscriptionStatus === "active" && role === "user" && (
                    <div>
                        <h2>Cancel Subscription</h2>
                        <MySubscription />
                    </div>
                )}

                {
                    role === "admin" && (
                        <div>
                            <h3>You're logged in as admin</h3>
                        </div>
                    )
                }
                {
                    subscriptionStatus === "inactive" && role === "user" && (
                        <div>
                            <h2>You don't have an active plan, subscribe here</h2>
                            <Link to={`/pricing`}><button>View Plans</button></Link>
                        </div>
                    )
                }

            </section>
            {subscriptionStatus === "active" || role === "admin" && (
                <div>
                    <RenderPlansDashboard />
                </div>
            )}


        </div>
    )
}

export default UserDashboard
