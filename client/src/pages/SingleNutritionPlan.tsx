import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useNutrition from "../hooks/useNutrition"
import { ImSad2 } from "react-icons/im";

const SingleNutritionPlan = () => {
    const { id } = useParams()
    const { getNutritionPlanById, nutritionById, deleteNutritionPlanById } = useNutrition()
    const navigate = useNavigate()

    useEffect(() => {
        if (!id) return

        getNutritionPlanById(String(id))

    }, [])

    if (!nutritionById) {
        return (
            <div className="no-content-page">
                <div className="no-content">
                    <ImSad2 className="no-render-icon" />
                    <h2 className="no-content-message">Coludn't find a nutrition plan, please try generating a new nutrition plan.</h2>
                </div>
            </div>
        )
    }


    const { meals } = nutritionById

    const weekPlan = Object.entries(meals).filter(([weeks]) => weeks.startsWith("week"));

    return (
        <div className="singel-page-page">
            <div className="singel-page-div">
                <div className="nutrition-plan-macros-div">
                    <h1>Single Nutrition Plan</h1>
                    <h2>{nutritionById.title}</h2>
                    <h3>Created at: {nutritionById.createdAt.slice(0, 10)}</h3>

                    <h4>
                        Calories: {nutritionById.meals.daily_estimates.calories}kcal</h4>
                    <div>
                        <p>Protein: {nutritionById.meals.daily_estimates.macros.protein}g</p>
                        <p>Carbs: {nutritionById.meals.daily_estimates.macros.carbs}g</p>
                        <p>Fat: {nutritionById.meals.daily_estimates.macros.fat}g</p>
                    </div>
                </div>

                <section className="singel-page-container">
                    {
                        weekPlan.map(([weekNumber, weekData]) => {
                            return (
                                <div className="singel-page-div" key={weekNumber}>
                                    <div className="single-page-div">
                                        <h4 className="singel-page-week">{weekNumber}</h4>
                                        {Object.entries(weekData).map(([day, dayMeals]) => {
                                            return (
                                                <div className="singel-page-day-div" key={day}>
                                                    <h5 className="singel-page-h4">{day}</h5>
                                                    {
                                                        (dayMeals as any).map((meal: any, index: number) => {
                                                            return (
                                                                <div className="singel-page-day-exercies-div" key={index}>
                                                                    <h5 className="singel-page-day-exercies-title">{meal.meal}</h5>
                                                                    <div>
                                                                        {meal.items.map((item: any, index: number) => {
                                                                            return (
                                                                                <div className="singel-page-day-exercies-div" key={index}>
                                                                                    <p className="singel-page-day-exercies">{item}</p>
                                                                                </div>
                                                                            )
                                                                        })}
                                                                    </div>

                                                                    <div className="singel-page-info">
                                                                        <h5>Macros:</h5>
                                                                        <p><span className='render-user-info'> Calories:</span> {meal.calories}kcal</p>
                                                                        <p><span className='render-user-info'> Protein:</span>  {meal.macros.protein}g</p>
                                                                        <p><span className='render-user-info'> Carbs:</span> Carbs: {meal.macros.carbs}g</p>
                                                                        <p><span className='render-user-info'> Fat:</span> {meal.macros.fat}g</p>
                                                                    </div>
                                                                </div>

                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })
                    }

                    <section className="nutrition-info">
                        <div>
                            {
                                meals.snacks && meals.snacks.length > 0 ? <div>
                                    <h2 className="single-page-title">Snacks</h2>
                                    {meals.snacks.map((snack) => {
                                        return (
                                            <p>{snack}</p>
                                        )
                                    })}
                                </div>
                                    : ""
                            }
                        </div>
                        <div>
                            {
                                meals.snack_suggestions && meals.snack_suggestions.length > 0 ?
                                    <div>
                                        <h2 className="single-page-title">Snack Suggestions</h2>
                                        {meals.snack_suggestions.map((snack) => {
                                            return (
                                                <p>{snack}</p>
                                            )
                                        })}
                                    </div>
                                    : ""
                            }
                        </div>

                        <div>
                            {meals.drinks && meals.drinks.length > 0 ?
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
                                : ""
                            }
                        </div>

                        <div>
                            {meals.drink_suggestions && meals.drink_suggestions.length > 0 ?
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
                                : ""
                            }
                        </div>

                        <div>
                            {
                                meals.meal_prep_tips && meals.meal_prep_tips.length > 0 ?
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
                                    :
                                    ""
                            }
                        </div>
                        <div>
                            {
                                meals.motivation_tips && meals.motivation_tips.length > 0 ?

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
                                    : ""
                            }
                        </div>
                    </section>
                </section>
                <button className="single-page-button delete-button" onClick={() => { deleteNutritionPlanById(String(id)); navigate("/nutritions") }}>Delete nutrition plan</button>
            </div>
        </div>
    )
}

export default SingleNutritionPlan
