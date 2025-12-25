import { useState, type FormEvent } from "react"
import type { INutritionPlan } from "../model/IPlans"
import { gender, level, goal, style, dietaryPreferences, activityLevel } from "../utils"
import useGenerate from "../hooks/useGenerate"
import "../style/form.css"


const NutritionPlanForm = () => {
    const { generateNutritionPlan } = useGenerate()
    const [loading, setLoading] = useState(false)
    const [createNutrition, setCreateNutrition] = useState<INutritionPlan>({
        gender: "male",
        age: 18,
        heightCm: 160,
        weightKg: 80,
        title: "",
        experienceLevel: "beginner",
        goal: "general_fitness",
        workoutDaysPerWeek: 3,
        style: "mixed",
        mealsPerDay: 3,
        dietaryPreferences: "",
        allergies: "",
        activetyLevel: "light"
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        setLoading(true)
        try {
            await generateNutritionPlan(createNutrition)
        } finally {
            setLoading(false)
        }

    }

    if (loading) {
        return (
            <section className="section-loader">
                <div className="loader-div">
                    <span className="loader"></span>
                    <h2>Nutrition plan is loading. Please wait...</h2>
                </div>
            </section>

        )
    }


    return (
        <div className="form-page">

            <h2 className="form-type">Create Nutrition Plan</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <br />
                <label className="form-span">Title <br />
                    <input className="form-input" type="text" min={1} name="title" value={createNutrition.title} onChange={(e) => { setCreateNutrition({ ...createNutrition, title: e.target.value }) }} required />
                </label><br /><br />
                <span className="form-span">Gender</span> <br />
                <div>
                    {
                        gender.map((option) => {
                            const isChecked = createNutrition.gender === option.value;
                            return (
                                <label key={option.value} className={isChecked ? "selected-radio" : "form-radio"}>
                                    <input type="radio"
                                        className="option"
                                        checked={createNutrition.gender === option.value}
                                        name="gender"
                                        value={createNutrition.gender}
                                        onChange={() => { setCreateNutrition({ ...createNutrition, gender: option.value }) }}
                                    />
                                    <span className="form-icon">{option.icon}</span>
                                    {option.label}

                                </label>
                            )
                        })
                    }</div>
                <br />
                <label className="form-span">Age <br />
                    <input className="form-input" type="number" min={1} name="age" value={createNutrition.age} onChange={(e) => { setCreateNutrition({ ...createNutrition, age: Number(e.target.value) }) }} />
                </label><br />

                <br />
                <label className="form-span">Height in CM <br />
                    <input className="form-input" type="number" min={1} name="heightCm" value={createNutrition.heightCm} onChange={(e) => { setCreateNutrition({ ...createNutrition, heightCm: Number(e.target.value) }) }} />
                </label><br />

                <br />
                <label className="form-span">Weight in Kg <br />
                    <input className="form-input" type="number" min={1} name="weightKg" value={createNutrition.weightKg} onChange={(e) => { setCreateNutrition({ ...createNutrition, weightKg: Number(e.target.value) }) }} />
                </label><br /> <br />


                <span className="form-span">Experince Level</span> <br />
                <div>
                    {
                        level.map((option) => {
                            const isChecked = createNutrition.experienceLevel === option.value;

                            return (
                                <label key={option.value} className={isChecked ? "selected-radio" : "form-radio"}>
                                    <input type="radio"
                                        className="option"

                                        checked={createNutrition.experienceLevel === option.value}
                                        name="experienceLevel"
                                        value={createNutrition.experienceLevel}
                                        onChange={() => { setCreateNutrition({ ...createNutrition, experienceLevel: option.value as INutritionPlan["experienceLevel"] }) }}
                                    />
                                    <span className="form-icon">{option.icon}</span>
                                    {option.label}

                                </label>
                            )
                        })
                    }</div>
                <br />

                <span className="form-span">Goal</span> <br />
                <div>
                    {
                        goal.map((option) => {
                            const isChecked = createNutrition.goal === option.value;

                            return (
                                <label key={option.value} className={isChecked ? "selected-radio" : "form-radio"}>
                                    <input type="radio"
                                        className="option"

                                        checked={createNutrition.goal === option.value}
                                        name="goal"
                                        value={createNutrition.goal}
                                        onChange={() => { setCreateNutrition({ ...createNutrition, goal: option.value as INutritionPlan["goal"] }) }}
                                    />
                                    <span className="form-icon">{option.icon}</span>
                                    {option.label}

                                </label>
                            )
                        })
                    }</div>
                <br />
                <br />
                <label className="form-span">Work Out Days Per Week <br />
                    <input className="form-input" type="number" min={1} max={7} name="workoutDaysPerWeek" value={createNutrition.workoutDaysPerWeek} onChange={(e) => { setCreateNutrition({ ...createNutrition, workoutDaysPerWeek: Number(e.target.value) }) }} />
                </label><br /> <br />


                <br />

                <span className="form-span">Style (Optional)</span> <br />
                <div>
                    {
                        style.map((option) => {
                            const isChecked = createNutrition.style === option.value;

                            return (
                                <label key={option.value} className={isChecked ? "selected-radio" : "form-radio"}>
                                    <input type="radio"
                                        className="option"

                                        checked={createNutrition.style === option.value}
                                        name="style"
                                        value={createNutrition.style}
                                        onChange={() => { setCreateNutrition({ ...createNutrition, style: option.value as INutritionPlan["style"] }) }}
                                    />
                                    <span className="form-icon">{option.icon}</span>
                                    {option.label}

                                </label>
                            )
                        })
                    }</div>
                <br />
                <br />
                <label className="form-span">Meals Per Day (Optional)<br />
                    <input className="form-input" type="number" min={1} max={7} name="mealsPerDay" value={createNutrition.mealsPerDay} onChange={(e) => { setCreateNutrition({ ...createNutrition, mealsPerDay: Number(e.target.value) }) }} />
                </label><br /> <br />

                <span className="form-span">Activity Level (Optional)</span> <br />
                <div>
                    {
                        activityLevel.map((option) => {
                            const isChecked = createNutrition.activetyLevel === option.value;

                            return (
                                <label key={option.value} className={isChecked ? "selected-radio" : "form-radio"}>
                                    <input type="radio"
                                        className="option"

                                        checked={createNutrition.activetyLevel === option.value}
                                        name="activetyLevel"
                                        value={createNutrition.activetyLevel}
                                        onChange={() => { setCreateNutrition({ ...createNutrition, activetyLevel: option.value as INutritionPlan["activetyLevel"] }) }}
                                    />
                                    <span className="form-icon">{option.icon}</span>
                                    {option.label}

                                </label>
                            )
                        })
                    }</div><br /> <br />

                <span className="form-span">Diet Restrictions (Optional)</span> <br />
                <div>
                    {
                        dietaryPreferences.map((option) => {
                            const isChecked = createNutrition.dietaryPreferences === option.value;

                            return (
                                <label key={option.value} className={isChecked ? "selected-radio" : "form-radio"}>
                                    <input type="radio"
                                        className="option"

                                        checked={createNutrition.dietaryPreferences === option.value}
                                        name="dietaryPreferences"
                                        value={createNutrition.dietaryPreferences}
                                        onChange={() => { setCreateNutrition({ ...createNutrition, dietaryPreferences: option.value as INutritionPlan["dietaryPreferences"] }) }}
                                    />
                                    <span className="form-icon">{option.icon}</span>
                                    {option.label}

                                </label>
                            )
                        })
                    }</div>

                <br />
                <br />
                <label className="form-span">Allergies (Optional)<br />
                    <input className="form-input" type="text" min={1} max={7} name="allergies" value={createNutrition.allergies} onChange={(e) => { setCreateNutrition({ ...createNutrition, allergies: e.target.value }) }} />
                </label><br /> <br />



                <button type="submit">Create Nutrition Plan</button>
            </form>
        </div>
    )
}

export default NutritionPlanForm
