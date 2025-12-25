import { useState } from "react"
import NutritionPlanForm from "../components/NutritionPlanForm"
import TrainingPlanForm from "../components/TrainingPlanForm"
import TrainingLogForm from "../components/TrainingLogForm"

const MyJourney = () => {
    const [plan, setPlan] = useState("training-plan")

    return (
        <section>
            <div className="admin-button-div">
                <button onClick={() => setPlan("training-plan")}>Training Plan</button>
                <button onClick={() => setPlan("nutrition-plan")}>Nutrition Plan</button>
                <button onClick={() => setPlan("training-log")}>Training Log</button>
            </div><div>
                {
                    plan === "training-plan" ? <TrainingPlanForm /> : plan === "nutrition-plan" ? <NutritionPlanForm /> : plan === "training-log" ? <TrainingLogForm /> : <TrainingPlanForm />
                }

            </div>
        </section>

    )
}

export default MyJourney
