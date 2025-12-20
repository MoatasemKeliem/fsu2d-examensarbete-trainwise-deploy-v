import { useEffect } from "react"
import useTrainingPlan from "../hooks/useTrainingPlan"
import { useNavigate, useParams } from "react-router-dom"

const SingleTrainingPlan = () => {
    const { getTrainingPlanById, trainingPlanById, deleteTrainingPlanById } = useTrainingPlan()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!id) {
            return
        }
        getTrainingPlanById(id)
    }, [])

    if (!trainingPlanById) {
        return (
            <div>
                <h2>Training plan with the ID of: {id} doesn't exist</h2>
            </div>
        )
    }
    return (
        <div>
            <h1>Single Training Plan</h1>
            {trainingPlanById?.trainingPlan.title}
            <p>Created at: {trainingPlanById.trainingPlan.createdAt.slice(0, 10)}</p>

            <div>
                {
                    trainingPlanById.trainingPlan.plan.map((plan) => {
                        return (
                            <div key={plan.week}>
                                <h3>{plan.week}</h3>
                                {
                                    plan.days.map((day) => {
                                        return (
                                            <div key={day.day}>
                                                <h4>{day.day}</h4>
                                                <h5>Exercises</h5>
                                                <div>
                                                    {
                                                        day.exercises.map((exercies, index: number) => {
                                                            return (
                                                                <div key={index}>
                                                                    <span>{exercies.name} - {exercies.sets} sets - {exercies.reps} reps</span>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <p>Calories burned: {day.caloriesBurned} kcal</p>
                                                <p>Motivation: {day.motivation}</p>
                                                <p>Nutrition tips: {day.nutritionTips}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        )
                    })
                }

            </div>
            <button onClick={() => { deleteTrainingPlanById(String(id)); navigate("/training-plans") }}>Delete training plan</button>
        </div>
    )
}

export default SingleTrainingPlan
