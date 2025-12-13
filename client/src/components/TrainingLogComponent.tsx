import { useEffect } from 'react'
import useTrainingLogs from '../hooks/useTrainingLogs'
import { Link } from 'react-router-dom'

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
            {
                allTrainingLogs.map((log) => {
                    return (
                        <div key={log.id}>
                            <h2>Your workout summary</h2>
                            <p>{log.workoutSummary}</p>

                            <h2>AI feedback</h2>
                            <p>{log.aiFeedback}</p>
                            <p>Created at: {log.createdAt.slice(0, 10)}</p>

                            <Link to={`/training-logs/${log.id}`}><button>View Training Log</button></Link>

                        </div >
                    )
                })
            }
        </div >
    )
}

export default TrainingLogComponent
