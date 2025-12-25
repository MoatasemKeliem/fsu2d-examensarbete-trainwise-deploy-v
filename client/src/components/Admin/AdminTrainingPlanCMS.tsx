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


    return (
        <div className='render-page-div'>
            {
                allTrainingPlansAdmin.map((plan) => {
                    return (
                        <div className='render-item-admin' key={plan.id}>
                            <h2 className='render-sub-title'>{plan.title}</h2>
                            <p className='render-date'>{plan.createdAt.slice(0, 10)}</p>
                            <div>
                                <p><span className='render-user-info'>Name:</span> {plan.user.name}</p>
                                <p><span className='render-user-info'>Email:</span> {plan.user.email}</p>
                                <p><span className='render-user-info'>Role:</span> {plan.user.role}</p>
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
