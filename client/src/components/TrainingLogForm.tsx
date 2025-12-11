import { useState, type FormEvent } from 'react'
import type { ITrainingLog } from '../model/IPlans'
import useGenerate from '../hooks/useGenerate'

const TrainingLogForm = () => {
    const { generateTrainingLog } = useGenerate()
    const [createTrainingLog, setCreateTrainingLog] = useState<ITrainingLog>({
        workoutSummary: ""
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        generateTrainingLog(createTrainingLog)
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
