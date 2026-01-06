import { useEffect } from "react"
import useNutrition from "../hooks/useNutrition"
import { Link } from "react-router-dom"

const NutritionPlansComponent = () => {
    const { getAllNutritionPlans, allNutrition } = useNutrition()

    useEffect(() => {
        getAllNutritionPlans()
    }, [])

    if (!allNutrition.length) {
        return (
            <div className="no-plans">
                <div className="admin-content">
                    <h2>You don't have any nutrition plans</h2>
                    <p className='no-plans-text'>Generate New Nutrition Plans</p>
                    <Link to={`/my-journey`}><button>Generate Here</button></Link>
                </div>
            </div>
        )
    }

    return (
        <div className='render-page-div'>
            {
                allNutrition.map((plan) => {
                    return (
                        <div className='render-item' key={plan.id}>
                            <h2 className='render-sub-title'>{plan.title}</h2>
                            <p className='render-date'>{plan.createdAt.slice(0, 10)}</p>
                            <Link to={`/nutritions/${plan.id}`}><button>View Nutrition Plan</button></Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NutritionPlansComponent
