import MySubscription from "../components/MySubscription"
import RenderPlansDashboard from "../components/RenderPlansDashboard"
import useAuth from "../hooks/useAuth"


const UserDashboard = () => {
    const { name } = useAuth()


    return (
        <div className="dashboard-page">
            <section className="dashboard">
                <h1>Welcome, {name}</h1>
                <div>
                    <h2>Cancel Subscription</h2>
                    <MySubscription />
                </div>
            </section>
            <div>
                <RenderPlansDashboard />
            </div>


        </div>
    )
}

export default UserDashboard
