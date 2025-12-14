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

    if (!nutritionById) {
        return <div>There is no Nutrition plan with the ID of: {id}</div>
    }

    console.log(nutritionById)

    const { meals } = nutritionById

    console.log("This is meal: ", meals)

    return (
        <div>
            <h1>Single Nutrition Plan</h1>
            <h2>{nutritionById.title}</h2>
            <h3>Created at: {nutritionById.createdAt.slice(0, 10)}</h3>

            <div>
                <h4>
                    Calories: {nutritionById.meals.daily_estimates.calories}</h4>
                <div>
                    <p>Protein: {nutritionById.meals.daily_estimates.macros.protein}g</p>
                    <p>Carbs: {nutritionById.meals.daily_estimates.macros.carbs}g</p>
                    <p>Fat: {nutritionById.meals.daily_estimates.macros.fat}g</p>
                </div>
            </div>

            <section>
                {
                    meals.week1.day1.map((day, index: number) => {
                        return (
                            <div key={index}>
                                <h5>{day.meal}</h5>
                                <p>{day.items}</p>
                                <p>Caloreis {day.calories}</p>
                                <p>Protein: {day.macros.protein}g</p>
                                <p>Carbs: {day.macros.carbs}g</p>
                                <p>Fat: {day.macros.fat}g</p>
                            </div>
                        )
                    })
                }
            </section>

        </div>
    )
}

export default SingleNutritionPlan
