import { useParams } from "react-router-dom"
import useTrainingPlanAdmin from "../../hooks/Admin/useTrainingPlanAdmin"
import { useEffect } from "react"
import "../../style/singleRender.css"

const AdminSingleTrainingPlan = () => {
    const { id } = useParams()
    const { trainingPlansByIdAdmin, getTrainingPlansByIdAdmin, deleteTrainingPlansByIdAdmin } = useTrainingPlanAdmin()

    useEffect(() => {
        if (!id) return

        getTrainingPlansByIdAdmin(id)
    }, [])

    if (!trainingPlansByIdAdmin) {
        return <h2>Training plan doesn't exist</h2>
    }




    return (
        <div className="singel-page-page">
            <div className="singel-page-div">
                <h1>Single Training Plan</h1>
                <h2 className="single-page-title">{trainingPlansByIdAdmin?.trainingPlan?.title}</h2>
                <p className="singel-page-date">{trainingPlansByIdAdmin?.trainingPlan?.createdAt.slice(0, 10)}</p>

                <div className="singel-page-container">
                    {

                        trainingPlansByIdAdmin?.trainingPlan?.plan?.map((plan) => {
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
                                                                            <span className="singel-page-day-exercies"><span className='render-user-info'>{exercies.name}</span>  - {exercies.sets} sets - {exercies.reps} reps</span>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        <div className="singel-page-info">
                                                            <p><span className='render-user-info'>Calories burned: <br /></span>Calories burned: {day.caloriesBurned} kcal</p>
                                                            <p><br /><span className='render-user-info'>Motivation:<br /></span> {day.motivation}</p>
                                                            <p><br /><span className='render-user-info'>Nutrition tips:<br /></span> {day.nutritionTips}</p>
                                                        </div>
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
                <button className="single-page-button delete-button" onClick={() => { deleteTrainingPlansByIdAdmin(String(id)) }}>Delete training plan</button>
            </div>
        </div>
    )
}

export default AdminSingleTrainingPlan
