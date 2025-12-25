import { useEffect } from "react"
import useTrainingPlan from "../hooks/useTrainingPlan"
import { useNavigate, useParams } from "react-router-dom"
import { ImSad2 } from "react-icons/im"

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
            <div className="no-content-page">
                <div className="no-content">
                    <ImSad2 className="no-render-icon" />
                    <h2 className="no-content-message">Coludn't find a training plan, please try generating a new training plan.</h2>
                </div>
            </div>
        )
    }
    return (
        <div className="singel-page-page">
            <div className="singel-page-div">

                <h2 className="single-page-title">{trainingPlanById?.trainingPlan?.title}</h2>
                <p className="singel-page-date"> {trainingPlanById.trainingPlan.createdAt.slice(0, 10)}</p>

                <div className="singel-page-container">
                    {
                        trainingPlanById.trainingPlan.plan.map((plan) => {
                            return (
                                <div className="singel-page-div-item" key={plan.week}>
                                    <div className="single-page-div">
                                        <h3 className="singel-page-week">{plan.week}</h3>
                                        {
                                            plan.days.map((day) => {
                                                return (
                                                    <div className="singel-page-day-div" key={day.day}>
                                                        <h4 className="singel-page-day">{day.day}</h4>
                                                        <h5 className="singel-page-day-exercies-title">Exercises</h5>
                                                        <div>
                                                            {
                                                                day.exercises.map((exercies, index: number) => {
                                                                    return (
                                                                        <div className="singel-page-day-exercies-div" key={index}>
                                                                            <span className="singel-page-day-exercies"><span className='render-user-info'>{exercies.name}:</span> {exercies.sets} sets - {exercies.reps} reps</span>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        {day.caloriesBurned ? <p><span className='render-user-info'>Calories burned: <br /></span>Calories burned: {day.caloriesBurned} kcal</p> : ""}
                                                        {day.motivation ? <p><br /><span className='render-user-info'>Motivation:<br /></span> {day.motivation}</p> : ""}
                                                        {day.nutritionTips ? <p><br /><span className='render-user-info'>Nutrition tips:<br /></span> {day.nutritionTips}</p> : ""}

                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <button onClick={() => { deleteTrainingPlanById(String(id)); navigate("/training-plans") }}>Delete training plan</button>
            </div>
        </div>
    )
}

export default SingleTrainingPlan
