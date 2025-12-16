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
        <div>
            {
                allTrainingLogs.map((log) => {
                    return (
                        <div key={log.id}>
                            <h2>Workout summary</h2>
                            <p>{log.workoutSummary}</p>

                            <h2>Feedback</h2>
                            <p>{log.aiFeedback.slice(0, 300)}...</p>
                            <p>{log.createdAt.slice(0, 10)}</p>
                            <div>
                                <p>Name: {log.user.name}</p>
                                <p>Email: {log.user.email}</p>
                                <p>Role: {log.user.role}</p>
                            </div>
                            <Link to={`/admin-training-log/${log.id}`}><button>View Training Log</button></Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AdminTrainingLogsCMS
