import { useState, type FormEvent } from 'react'
import type { ITrainingLog } from '../model/IPlans'
import useGenerate from '../hooks/useGenerate'

const TrainingLogForm = () => {
    const { generateTrainingLog } = useGenerate()
    const [loading, setLoading] = useState(false)
    const [createTrainingLog, setCreateTrainingLog] = useState<ITrainingLog>({
        workoutSummary: ""
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        setLoading(true)

        try {
            await generateTrainingLog(createTrainingLog)
        } finally {
            setLoading(false)
        }


    }

    if (loading) {
        return (
            <div>
                <span className="loader"></span>
                <h2>Training Log feedback is loading. Please wait...</h2>
            </div>
        )
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Work out summary <br />
                    <textarea name="workoutSummary" value={createTrainingLog.workoutSummary} onChange={(e) => { setCreateTrainingLog({ ...createTrainingLog, workoutSummary: e.target.value }) }}></textarea>
                </label><br />
                <button type='submit'>Create Training Log</button>
            </form>
        </div>
    )
}

export default TrainingLogForm
