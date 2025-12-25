import { useEffect } from "react"
import useNutrition from "../hooks/useNutrition"
import { Link } from "react-router-dom"

const NutritionPlansComponent = () => {
    const { getAllNutritionPlans, allNutrition } = useNutrition()

    useEffect(() => {
        getAllNutritionPlans()
    }, [])


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
