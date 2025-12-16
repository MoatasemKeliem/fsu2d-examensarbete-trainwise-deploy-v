import { useEffect } from 'react'
import useNutritionPlanAdmin from '../../hooks/Admin/useNutritionPlanAdmin'
import { Link } from 'react-router-dom'

const AdminNutritionPlanCMS = () => {
    const { getAllNutritionPlanAdmin, allNutritionPlansAdmin } = useNutritionPlanAdmin()

    useEffect(() => {
        getAllNutritionPlanAdmin()
    }, [])


    return (
        <div>
            {
                allNutritionPlansAdmin.map((plan) => {
                    return (
                        <div key={plan.id}>
                            <h2>Title: {plan.title}</h2>
                            <p>Created At: {plan.createdAt.slice(0, 10)}</p>
                            <div>
                                <p>Name: {plan.user.name}</p>
                                <p>Email: {plan.user.email}</p>
                                <p>Role: {plan.user.role}</p>
                            </div>
                            <Link to={`/admin-nutrition-Plan/${plan.id}`}><button>View Nutrition Plan</button></Link>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default AdminNutritionPlanCMS
