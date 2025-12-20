import { useEffect } from "react"
import useNutrition from "../hooks/useNutrition"
import { Link } from "react-router-dom"

const NutritionPlansComponent = () => {
    const { getAllNutritionPlans, allNutrition } = useNutrition()

    useEffect(() => {
        getAllNutritionPlans()
    }, [])


    return (
        <div>
            {
                allNutrition.map((plan) => {
                    return (
                        <div key={plan.id}>
                            <h2>{plan.title}</h2>
                            <p>{plan.createdAt.slice(0, 10)}</p>
                            <Link to={`/nutritions/${plan.id}`}><button>View Nutrition Plan</button></Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NutritionPlansComponent
