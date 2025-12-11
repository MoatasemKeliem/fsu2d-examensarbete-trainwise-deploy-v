import { useState, type FormEvent } from "react"
import type { INutritionPlan } from "../model/IPlans"
import { gender, level, goal, style, dietaryPreferences, activityLevel } from "../utils"
import useGenerate from "../hooks/useGenerate"

const NutritionPlanForm = () => {
    const { generateNutritionPlan } = useGenerate()
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
        activetyLevel: "moderate"
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        generateNutritionPlan(createNutrition)
    }


    return (
        <div>
            <h2>Create Nutrition Plan</h2>
            <form onSubmit={handleSubmit}>
                <br />
                <label>Title <br />
                    <input type="text" min={1} name="title" value={createNutrition.title} onChange={(e) => { setCreateNutrition({ ...createNutrition, title: e.target.value }) }} required />
                </label><br /><br />
                <span>Gender</span> <br />
                {
                    gender.map((option) => {
                        return (
                            <label key={option.value}>
                                <input type="radio"
                                    checked={createNutrition.gender === option.value}
                                    name="gender"
                                    value={createNutrition.gender}
                                    onChange={() => { setCreateNutrition({ ...createNutrition, gender: option.value }) }}
                                />
                                <span>{option.icon}</span>
                                {option.label}

                            </label>
                        )
                    })
                }
                <br />
                <label>Age <br />
                    <input type="number" min={1} name="age" value={createNutrition.age} onChange={(e) => { setCreateNutrition({ ...createNutrition, age: Number(e.target.value) }) }} />
                </label><br />

                <br />
                <label>Height in CM <br />
                    <input type="number" min={1} name="heightCm" value={createNutrition.heightCm} onChange={(e) => { setCreateNutrition({ ...createNutrition, heightCm: Number(e.target.value) }) }} />
                </label><br />

                <br />
                <label>Weight in Kg <br />
                    <input type="number" min={1} name="weightKg" value={createNutrition.weightKg} onChange={(e) => { setCreateNutrition({ ...createNutrition, weightKg: Number(e.target.value) }) }} />
                </label><br /> <br />


                <span>Experince Level</span> <br />
                {
                    level.map((option) => {
                        return (
                            <label key={option.value}>
                                <input type="radio"
                                    checked={createNutrition.experienceLevel === option.value}
                                    name="experienceLevel"
                                    value={createNutrition.experienceLevel}
                                    onChange={() => { setCreateNutrition({ ...createNutrition, experienceLevel: option.value as INutritionPlan["experienceLevel"] }) }}
                                />
                                <span>{option.icon}</span>
                                {option.label}

                            </label>
                        )
                    })
                }
                <br />

                <span>Goal</span> <br />
                {
                    goal.map((option) => {
                        return (
                            <label key={option.value}>
                                <input type="radio"
                                    checked={createNutrition.goal === option.value}
                                    name="goal"
                                    value={createNutrition.goal}
                                    onChange={() => { setCreateNutrition({ ...createNutrition, goal: option.value as INutritionPlan["goal"] }) }}
                                />
                                <span>{option.icon}</span>
                                {option.label}

                            </label>
                        )
                    })
                }
                <br />
                <br />
                <label>Available Days Per Week <br />
                    <input type="number" min={1} max={7} name="workoutDaysPerWeek" value={createNutrition.workoutDaysPerWeek} onChange={(e) => { setCreateNutrition({ ...createNutrition, workoutDaysPerWeek: Number(e.target.value) }) }} />
                </label><br /> <br />


                <br />

                <span>Style (Optional)</span> <br />
                {
                    style.map((option) => {
                        return (
                            <label key={option.value}>
                                <input type="radio"
                                    checked={createNutrition.style === option.value}
                                    name="style"
                                    value={createNutrition.style}
                                    onChange={() => { setCreateNutrition({ ...createNutrition, style: option.value as INutritionPlan["style"] }) }}
                                />
                                <span>{option.icon}</span>
                                {option.label}

                            </label>
                        )
                    })
                }
                <br />
                <br />
                <label>Meals Per Day (Optional)<br />
                    <input type="number" min={1} max={7} name="mealsPerDay" value={createNutrition.mealsPerDay} onChange={(e) => { setCreateNutrition({ ...createNutrition, mealsPerDay: Number(e.target.value) }) }} />
                </label><br /> <br />

                <span>Activity Level (Optional)</span> <br />
                {
                    activityLevel.map((option) => {
                        return (
                            <label key={option.value}>
                                <input type="radio"
                                    checked={createNutrition.activetyLevel === option.value}
                                    name="activetyLevel"
                                    value={createNutrition.activetyLevel}
                                    onChange={() => { setCreateNutrition({ ...createNutrition, activetyLevel: option.value as INutritionPlan["activetyLevel"] }) }}
                                />
                                <span>{option.icon}</span>
                                {option.label}

                            </label>
                        )
                    })
                }<br /> <br />

                <span>Diet Restrictions (Optional)</span> <br />
                {
                    dietaryPreferences.map((option) => {
                        return (
                            <label key={option.value}>
                                <input type="radio"
                                    checked={createNutrition.dietaryPreferences === option.value}
                                    name="dietaryPreferences"
                                    value={createNutrition.dietaryPreferences}
                                    onChange={() => { setCreateNutrition({ ...createNutrition, dietaryPreferences: option.value as INutritionPlan["dietaryPreferences"] }) }}
                                />
                                <span>{option.icon}</span>
                                {option.label}

                            </label>
                        )
                    })
                }

                <br />
                <br />
                <label>Allergies (Optional)<br />
                    <input type="text" min={1} max={7} name="allergies" value={createNutrition.allergies} onChange={(e) => { setCreateNutrition({ ...createNutrition, allergies: e.target.value }) }} />
                </label><br /> <br />



                <button type="submit">Create Nutrition Plan</button>
            </form>
        </div>
    )
}

export default NutritionPlanForm
