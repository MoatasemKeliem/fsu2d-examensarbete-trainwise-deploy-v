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


    return (
        <div className='render-page-div'>
            {
                allTrainingLogs.map((log) => {
                    return (
                        <div className='render-item' key={log.id}>
                            <p className='render-workoutSummary'>{log.workoutSummary.slice(0, 200)}...</p>

                            <p className='render-date'>{log.createdAt.slice(0, 10)}</p>

                            <Link to={`/training-logs/${log.id}`}><button>View Training Log</button></Link>

                        </div >
                    )
                })
            }
        </div >
    )
}

export default TrainingLogComponent
