import { useState, type FormEvent } from "react"
import type { ITrainingPlan } from "../model/IPlans"
import { gender, goal, level, preferredWorkoutType, style } from "../utils"
import useGenerate from "../hooks/useGenerate"

const TrainingPlanForm = () => {
    const { generateTrainingPlan } = useGenerate()
    const [loading, setLoading] = useState(false)
    const [createTraining, setCreateTraining] = useState<ITrainingPlan>({
        gender: "male",
        age: 18,
        heightCm: 160,
        weightKg: 80,
        title: "",
        experienceLevel: "beginner",
        goal: "general_fitness",
        workoutDaysPerWeek: 3,
        preferredWorkoutType: "mixed",
        style: "mixed",
        injuries: "",
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            await generateTrainingPlan(createTraining)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div>
                <span className="loader"></span>
                <h2>Training plan is loading. Please wait...</h2>
            </div>
        )
    }


    return (
        <div>
            <h2>Create Training Plan</h2>
            <form onSubmit={handleSubmit}>
                <br />
                <label>Title <br />
                    <input type="text" min={1} name="title" value={createTraining.title} onChange={(e) => { setCreateTraining({ ...createTraining, title: e.target.value }) }} required />
                </label><br /><br />
                <span>Gender</span> <br />
                {
                    gender.map((option) => {
                        return (
                            <label key={option.value}>
                                <input type="radio"
                                    checked={createTraining.gender === option.value}
                                    name="gender"
                                    value={createTraining.gender}
                                    onChange={() => { setCreateTraining({ ...createTraining, gender: option.value }) }}
                                />
                                <span>{option.icon}</span>
                                {option.label}

                            </label>
                        )
                    })
                }
                <br />
                <label>Age <br />
                    <input type="number" min={1} name="age" value={createTraining.age} onChange={(e) => { setCreateTraining({ ...createTraining, age: Number(e.target.value) }) }} />
                </label><br />

                <br />
                <label>Height in CM <br />
                    <input type="number" min={1} name="heightCm" value={createTraining.heightCm} onChange={(e) => { setCreateTraining({ ...createTraining, heightCm: Number(e.target.value) }) }} />
                </label><br />

                <br />
                <label>Weight in Kg <br />
                    <input type="number" min={1} name="weightKg" value={createTraining.weightKg} onChange={(e) => { setCreateTraining({ ...createTraining, weightKg: Number(e.target.value) }) }} />
                </label><br /> <br />


                <span>Experince Level</span> <br />
                {
                    level.map((option) => {
                        return (
                            <label key={option.value}>
                                <input type="radio"
                                    checked={createTraining.experienceLevel === option.value}
                                    name="experienceLevel"
                                    value={createTraining.experienceLevel}
                                    onChange={() => { setCreateTraining({ ...createTraining, experienceLevel: option.value as ITrainingPlan["experienceLevel"] }) }}
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
                                    checked={createTraining.goal === option.value}
                                    name="goal"
                                    value={createTraining.goal}
                                    onChange={() => { setCreateTraining({ ...createTraining, goal: option.value as ITrainingPlan["goal"] }) }}
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
                    <input type="number" min={1} max={7} name="workoutDaysPerWeek" value={createTraining.workoutDaysPerWeek} onChange={(e) => { setCreateTraining({ ...createTraining, workoutDaysPerWeek: Number(e.target.value) }) }} />
                </label><br /> <br />

                <span>Preferred Workout Type</span> <br />
                {
                    preferredWorkoutType.map((option) => {
                        return (
                            <label key={option.value}>
                                <input type="radio"
                                    checked={createTraining.preferredWorkoutType === option.value}
                                    name="preferredWorkoutType"
                                    value={createTraining.preferredWorkoutType}
                                    onChange={() => { setCreateTraining({ ...createTraining, preferredWorkoutType: option.value as ITrainingPlan["preferredWorkoutType"] }) }}
                                />
                                <span>{option.icon}</span>
                                {option.label}

                            </label>
                        )
                    })
                }
                <br />

                <span>Style (Optional)</span> <br />
                {
                    style.map((option) => {
                        return (
                            <label key={option.value}>
                                <input type="radio"
                                    checked={createTraining.style === option.value}
                                    name="style"
                                    value={createTraining.style}
                                    onChange={() => { setCreateTraining({ ...createTraining, style: option.value as ITrainingPlan["style"] }) }}
                                />
                                <span>{option.icon}</span>
                                {option.label}

                            </label>
                        )
                    })
                }
                <br />
                <br />
                <label>Injuries (Optional)<br />
                    <input type="text" min={1} max={7} name="injuries" value={createTraining.injuries} onChange={(e) => { setCreateTraining({ ...createTraining, injuries: e.target.value }) }} />
                </label><br /> <br />
                <button type="submit">Create Training Plan</button>
            </form>
        </div>
    )
}

export default TrainingPlanForm
