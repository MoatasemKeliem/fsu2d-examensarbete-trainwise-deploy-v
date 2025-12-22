import { useState, type FormEvent } from "react"
import type { ITrainingPlan } from "../model/IPlans"
import { gender, goal, level, preferredWorkoutType, style } from "../utils"
import useGenerate from "../hooks/useGenerate"
import "../style/form.css"

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
        <div className="form-page">
            <h2 className="form-type">Create Training Plan</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <br />
                <label className="form-span">Title <br />
                    <input className="form-input" type="text" min={1} name="title" value={createTraining.title} onChange={(e) => { setCreateTraining({ ...createTraining, title: e.target.value }) }} required />
                </label><br /><br />
                <span className="form-span">Gender</span> <br />
                <div>
                    {
                        gender.map((option) => {
                            const isChecked = createTraining.gender === option.value;
                            return (
                                <label key={option.value} className={isChecked ? "selected-radio" : "form-radio"}>
                                    <input type="radio"
                                        className="option"
                                        checked={createTraining.gender === option.value}

                                        name="gender"
                                        value={createTraining.gender}
                                        onChange={() => { setCreateTraining({ ...createTraining, gender: option.value }) }}
                                    />
                                    <span className="form-icon">{option.icon}</span>
                                    {option.label}

                                </label>
                            )
                        })
                    }
                </div>
                <br />
                <label className="form-span">Age <br />
                    <input className="form-input" type="number" min={1} name="age" value={createTraining.age} onChange={(e) => { setCreateTraining({ ...createTraining, age: Number(e.target.value) }) }} />
                </label><br />

                <br />
                <label className="form-span">Height in CM <br />
                    <input className="form-input" type="number" min={1} name="heightCm" value={createTraining.heightCm} onChange={(e) => { setCreateTraining({ ...createTraining, heightCm: Number(e.target.value) }) }} />
                </label><br />

                <br />
                <label className="form-span">Weight in Kg <br />
                    <input className="form-input" type="number" min={1} name="weightKg" value={createTraining.weightKg} onChange={(e) => { setCreateTraining({ ...createTraining, weightKg: Number(e.target.value) }) }} />
                </label><br /> <br />


                <span className="form-span">Experince Level</span> <br />
                <div>
                    {
                        level.map((option) => {
                            const isChecked = createTraining.experienceLevel === option.value;

                            return (
                                <label key={option.value} className={isChecked ? "selected-radio" : "form-radio"}>
                                    <input type="radio"
                                        className="option"

                                        checked={createTraining.experienceLevel === option.value}
                                        name="experienceLevel"
                                        value={createTraining.experienceLevel}
                                        onChange={() => { setCreateTraining({ ...createTraining, experienceLevel: option.value as ITrainingPlan["experienceLevel"] }) }}
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
                            const isChecked = createTraining.goal === option.value;

                            return (
                                <label key={option.value} className={isChecked ? "selected-radio" : "form-radio"}>
                                    <input type="radio"
                                        className="option"

                                        checked={createTraining.goal === option.value}
                                        name="goal"
                                        value={createTraining.goal}
                                        onChange={() => { setCreateTraining({ ...createTraining, goal: option.value as ITrainingPlan["goal"] }) }}
                                    />
                                    <span className="form-icon">{option.icon}</span>
                                    {option.label}

                                </label>
                            )
                        })
                    }
                </div>
                <br />
                <br />
                <label className="form-span">Available Days Per Week <br />
                    <input className="form-input" type="number" min={1} max={7} name="workoutDaysPerWeek" value={createTraining.workoutDaysPerWeek} onChange={(e) => { setCreateTraining({ ...createTraining, workoutDaysPerWeek: Number(e.target.value) }) }} />
                </label><br /> <br />

                <span className="form-span">Preferred Workout Type</span> <br />
                <div>
                    {
                        preferredWorkoutType.map((option) => {
                            const isChecked = createTraining.preferredWorkoutType === option.value;

                            return (
                                <label key={option.value} className={isChecked ? "selected-radio" : "form-radio"}>
                                    <input type="radio"
                                        className="option"

                                        checked={createTraining.preferredWorkoutType === option.value}
                                        name="preferredWorkoutType"
                                        value={createTraining.preferredWorkoutType}
                                        onChange={() => { setCreateTraining({ ...createTraining, preferredWorkoutType: option.value as ITrainingPlan["preferredWorkoutType"] }) }}
                                    />
                                    <span className="form-icon">{option.icon}</span>
                                    {option.label}

                                </label>
                            )
                        })
                    }</div>
                <br />

                <span className="form-span">Style (Optional)</span> <br />
                <div>
                    {
                        style.map((option) => {
                            const isChecked = createTraining.style === option.value;

                            return (
                                <label key={option.value} className={isChecked ? "selected-radio" : "form-radio"}>
                                    <input type="radio"
                                        checked={createTraining.style === option.value}
                                        name="style"
                                        className="option"

                                        value={createTraining.style}
                                        onChange={() => { setCreateTraining({ ...createTraining, style: option.value as ITrainingPlan["style"] }) }}
                                    />
                                    <span className="form-icon">{option.icon}</span>
                                    {option.label}

                                </label>
                            )
                        })
                    }</div>
                <br />
                <br />
                <label className="form-span">Injuries (Optional)<br />
                    <input className="form-input" type="text" min={1} max={7} name="injuries" value={createTraining.injuries} onChange={(e) => { setCreateTraining({ ...createTraining, injuries: e.target.value }) }} />
                </label><br /> <br />
                <button type="submit">Create Training Plan</button>
            </form>
        </div>
    )
}

export default TrainingPlanForm
