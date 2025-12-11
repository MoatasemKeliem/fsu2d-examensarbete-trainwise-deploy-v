import { useState } from 'react'
import type { ITrainingLog } from '../model/IPlans'

const TrainingLogForm = () => {
    const [createTrainingLog, setCreateTrainingLog] = useState<ITrainingLog>({
        workoutSummary: ""
    })



    return (
        <div>
            <form>
                <label>Work out summary <br />
                    <textarea name="workoutSummary" value={createTrainingLog.workoutSummary} onChange={(e) => { setCreateTrainingLog({ ...createTrainingLog, workoutSummary: e.target.value }) }}></textarea>
                </label><br />
                <button>Create Training Log</button>
            </form>
        </div>
    )
}

export default TrainingLogForm
