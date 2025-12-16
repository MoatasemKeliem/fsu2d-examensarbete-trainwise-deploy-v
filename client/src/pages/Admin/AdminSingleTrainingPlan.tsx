import { useParams } from "react-router-dom"
import useTrainingPlanAdmin from "../../hooks/Admin/useTrainingPlanAdmin"
import { useEffect } from "react"

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
        <div>
            <div>
                <h1>Single Training Plan</h1>
                {trainingPlansByIdAdmin?.trainingPlan?.title}
                <p>Created at: {trainingPlansByIdAdmin?.trainingPlan?.createdAt.slice(0, 10)}</p>

                <div>
                    {

                        trainingPlansByIdAdmin?.trainingPlan?.plan?.map((plan) => {
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
                <button onClick={() => { deleteTrainingPlansByIdAdmin(String(id)) }}>Delete training plan</button>
            </div>
        </div>
    )
}

export default AdminSingleTrainingPlan
