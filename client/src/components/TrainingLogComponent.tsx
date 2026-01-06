import { useEffect } from 'react'
import useTrainingLogs from '../hooks/useTrainingLogs'
import { Link } from 'react-router-dom'

const TrainingLogComponent = () => {
    const { getAllTrainingLogs, allTrainingLogs } = useTrainingLogs()

    useEffect(() => {
        getAllTrainingLogs()
    }, [])


    if (!allTrainingLogs.length) {
        return (
            <div className="no-plans">
                <div className="admin-content">
                    <h2>You don't have any training logs</h2>
                    <p className='no-plans-text'>Generate New Training Logs</p>
                    <Link to={`/my-journey`}><button>Generate Here</button></Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="plans-page-title">
                <div className="plans-page-content">
                    <h2>Training Logs</h2>
                </div>
            </div>
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
        </div>

    )
}

export default TrainingLogComponent
