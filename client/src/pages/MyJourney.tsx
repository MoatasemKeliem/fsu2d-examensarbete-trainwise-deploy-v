import { useState } from "react"
import NutritionPlanForm from "../components/NutritionPlanForm"
import TrainingPlanForm from "../components/TrainingPlanForm"
import TrainingLogForm from "../components/TrainingLogForm"

const MyJourney = () => {
    const [plan, setPlan] = useState("training-plan")

    return (
        <div>
            <h1>My Journey</h1>
            <button onClick={() => setPlan("training-plan")}>Training Plan</button>
            <button onClick={() => setPlan("nutrition-plan")}>Nutrition Plan</button>
            <button onClick={() => setPlan("training-log")}>Training Log</button>
            {
                plan === "training-plan" ? <TrainingPlanForm /> : plan === "nutrition-plan" ? <NutritionPlanForm /> : plan === "training-log" ? <TrainingLogForm /> : <TrainingPlanForm />
            }

        </div>
    )
}

export default MyJourney
