import { useParams } from "react-router-dom"
import useNutritionPlanAdmin from "../../hooks/Admin/useNutritionPlanAdmin"
import { useEffect } from "react"

const AdminSingleNutritionPlan = () => {
    const { getNutritionPlanByIdAdmin, nutritionPlansByIdAdmin, deleteNutritionPlanByIdAdmin } = useNutritionPlanAdmin()
    const { id } = useParams()

    useEffect(() => {
        if (!id) return

        getNutritionPlanByIdAdmin(id)

    }, [])

    if (!nutritionPlansByIdAdmin) {
        return <div>There is no nutrition plan </div>
    }

    console.log(nutritionPlansByIdAdmin)

    const { meals } = nutritionPlansByIdAdmin


    const weekPlan = Object.entries(meals).filter(([weeks]) => weeks.startsWith("week"));

    return (
        <div>
            <h1>Single Nutrition Plan</h1>
            <h2>{nutritionPlansByIdAdmin.title}</h2>
            <h3>Created at: {nutritionPlansByIdAdmin.createdAt.slice(0, 10)}</h3>

            <div>
                <h4>
                    Calories: {nutritionPlansByIdAdmin.meals.daily_estimates.calories}</h4>
                <div>
                    <p>Protein: {nutritionPlansByIdAdmin.meals.daily_estimates.macros.protein}g</p>
                    <p>Carbs: {nutritionPlansByIdAdmin.meals.daily_estimates.macros.carbs}g</p>
                    <p>Fat: {nutritionPlansByIdAdmin.meals.daily_estimates.macros.fat}g</p>
                </div>
            </div>

            <section>
                {
                    weekPlan.map(([weekNumber, weekData]) => {
                        return (
                            <div key={weekNumber}>
                                <h4>{weekNumber}</h4>
                                {Object.entries(weekData).map(([day, dayMeals]) => {
                                    return (
                                        <div key={day}>
                                            <h5>{day}</h5>
                                            {
                                                (dayMeals as any).map((meal: any, index: number) => {
                                                    return (
                                                        <div key={index}>
                                                            <h5>{meal.meal}</h5>
                                                            <div>
                                                                {meal.items.map((item: any, index: number) => {
                                                                    return (
                                                                        <div key={index}>
                                                                            <p>{item}</p>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                            <p>Calories: {meal.calories}</p>
                                                            <div>
                                                                <h5>Macros:</h5>
                                                                <p>Protein: {meal.macros.protein}</p>
                                                                <p>Carbs: {meal.macros.carbs}</p>
                                                                <p>Fat: {meal.macros.fat}</p>
                                                            </div>
                                                        </div>

                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
                }

                <section>
                    <div>
                        <h2>Snacks</h2>
                        {meals.snacks.map((snack) => {
                            return (
                                <p>{snack}</p>
                            )
                        })}
                    </div>
                    <div>
                        <h2>Snack Suggestions</h2>
                        {meals.snack_suggestions.map((snack) => {
                            return (
                                <p>{snack}</p>
                            )
                        })}
                    </div>

                    <div>
                        <h2>Drinks</h2>
                        {
                            meals.drinks.map((drink) => {
                                return (
                                    <p>{drink}</p>
                                )
                            })
                        }
                    </div>

                    <div>
                        <h2>Drink Suggestions</h2>
                        {
                            meals.drink_suggestions.map((drink) => {
                                return (
                                    <p>{drink}</p>
                                )
                            })
                        }
                    </div>

                    <div>
                        <h2>Meal Prep Tips</h2>
                        {
                            meals.meal_prep_tips.map((prep) => {
                                return (
                                    <p>{prep}</p>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h2>Motivation Tips</h2>
                        {
                            meals.motivation_tips.map((tips, index: number) => {
                                return (
                                    <p>{index + 1}. {tips}</p>
                                )
                            })
                        }
                    </div>
                </section>
            </section>
            <button onClick={() => { deleteNutritionPlanByIdAdmin(String(id)) }}>Delete nutrition plan</button>

        </div>
    )
}

export default AdminSingleNutritionPlan
