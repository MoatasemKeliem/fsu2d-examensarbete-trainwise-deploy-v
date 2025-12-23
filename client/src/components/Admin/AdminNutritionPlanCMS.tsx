import { useEffect } from 'react'
import useNutritionPlanAdmin from '../../hooks/Admin/useNutritionPlanAdmin'
import { Link } from 'react-router-dom'
import "../../style/render.css"


const AdminNutritionPlanCMS = () => {
    const { getAllNutritionPlanAdmin, allNutritionPlansAdmin } = useNutritionPlanAdmin()

    useEffect(() => {
        getAllNutritionPlanAdmin()
    }, [])


    return (
        <div className='render-page-div'>
            {
                allNutritionPlansAdmin.map((plan) => {
                    return (
                        <div className='render-item-admin' key={plan.id}>
                            <h2 className='render-sub-title'>{plan.title}</h2>
                            <p className='render-date'>{plan.createdAt.slice(0, 10)}</p>
                            <div>
                                <p><span className='render-user-info'>Name:</span> {plan.user.name}</p>
                                <p><span className='render-user-info'>Email:</span> {plan.user.email}</p>
                                <p><span className='render-user-info'>Role:</span> {plan.user.role}</p>
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
