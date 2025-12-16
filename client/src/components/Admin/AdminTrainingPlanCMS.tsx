import { useEffect } from "react"
import useTrainingPlanAdmin from "../../hooks/Admin/useTrainingPlanAdmin"
import { Link } from "react-router-dom"

const AdminTrainingPlanCMS = () => {
    const { getAllTrainingPlansAdmin, allTrainingPlansAdmin } = useTrainingPlanAdmin()

    useEffect(() => {
        getAllTrainingPlansAdmin()
    }, [])

    if (!allTrainingPlansAdmin) {
        return <h2>There is no training plans for admin</h2>
    }

    console.log(allTrainingPlansAdmin)

    return (
        <div>
            <h1>Training Plans</h1>
            {
                allTrainingPlansAdmin.map((plan) => {
                    return (
                        <div key={plan.id}>
                            <h3>{plan.title}</h3>
                            <p>{plan.createdAt}</p>
                            <div>
                                <p>{plan.user.name}</p>
                                <p>{plan.user.email}</p>
                                <p>{plan.user.role}</p>
                            </div>
                            <Link to={`/admin-training-Plan/${plan.id}`}><button>View Training Plan</button></Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AdminTrainingPlanCMS
