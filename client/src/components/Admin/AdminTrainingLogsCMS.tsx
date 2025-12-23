import { useEffect } from "react"
import useTrainingLogAdmin from "../../hooks/Admin/useTrainingLogAdmin"
import { Link } from "react-router-dom"

const AdminTrainingLogsCMS = () => {
    const { getAllTrainingLogs, allTrainingLogs } = useTrainingLogAdmin()

    useEffect(() => {
        getAllTrainingLogs()
    }, [])

    if (!allTrainingLogs) {
        return <h2>There is no training logs</h2>
    }



    return (
        <div className='render-page-div'>
            {
                allTrainingLogs.map((log) => {
                    return (
                        <div className='render-user-admin' key={log.id}>
                            <p className='render-workoutSummary'>{log.workoutSummary.slice(0, 200)}...</p>
                            <p className='render-date'>{log.createdAt.slice(0, 10)}</p>

                            <p><span className='render-user-info'>Name:</span> {log.user.name}</p>
                            <p><span className='render-user-info'>Email:</span> {log.user.email}</p>
                            <p><span className='render-user-info'>Role:</span> {log.user.role}</p>
                            <Link to={`/admin-training-log/${log.id}`}><button>View Training Log</button></Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AdminTrainingLogsCMS
