import { useEffect } from 'react'
import useTrainingPlan from '../hooks/useTrainingPlan'
import { Link } from 'react-router-dom'

const TrainingplansComponent = () => {
    const { getAllTrainingPlans, allTrainingPlans } = useTrainingPlan()

    useEffect(() => {
        getAllTrainingPlans()
    }, [])

    if (!allTrainingPlans) {
        return <p>There is no training plans</p>
    }

    return (
        <div>
            {
                allTrainingPlans.map((plan) => {
                    return (
                        <div key={plan.id}>
                            <h2>{plan.title}</h2>
                            <p>{plan.createdAt.slice(0, 10)}</p>
                            <div>
                                {
                                    plan.plan.map((week) => {
                                        return (
                                            <div key={week.week}>
                                                <h3>{week.week}</h3>
                                                {
                                                    week.days.map((day) => {
                                                        return (
                                                            <div key={day.day}>
                                                                <h4>{day.day}</h4>
                                                                <h5>Exercises</h5>
                                                                <div>
                                                                    {
                                                                        day.exercises.map((exercies, index: number) => {
                                                                            return (
                                                                                <div key={index}>
                                                                                    <span>{exercies.name} - {exercies.sets} sets - {exercies.reps} reps </span>
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
                            <Link to={`/training-plans/${plan.id}`}><button>View Training Plan</button></Link>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default TrainingplansComponent
