import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useNutrition from "../hooks/useNutrition"

const SingleNutritionPlan = () => {
    const { id } = useParams()
    const { getNutritionPlanById, nutritionById, deleteNutritionPlanById } = useNutrition()

    useEffect(() => {
        if (!id) return

        getNutritionPlanById(String(id))

    }, [])

    console.log(nutritionById)

    return (
        <div>
            <h1>Single Nutrition Plan</h1>

        </div>
    )
}

export default SingleNutritionPlan
