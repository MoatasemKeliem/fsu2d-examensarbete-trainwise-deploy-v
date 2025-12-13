import { useEffect } from 'react'
import useTrainingLogs from '../hooks/useTrainingLogs'

const TrainingLogComponent = () => {
    const { getAllTrainingLogs, allTrainingLogs } = useTrainingLogs()

    useEffect(() => {
        getAllTrainingLogs()
    }, [])


    if (!allTrainingLogs) {
        return <p>There is no training logs</p>
    }

    console.log(allTrainingLogs)

    return (
        <div>

        </div>
    )
}

export default TrainingLogComponent
