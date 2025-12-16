import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useTrainingLogAdmin from '../../hooks/Admin/useTrainingLogAdmin'

const AdminSingleTrainingLog = () => {
    const { id } = useParams()
    const { deleteTrainingLogByIdAdmin, getTrainingLogByIdAdmin, trainingLogById } = useTrainingLogAdmin()

    useEffect(() => {
        if (!id) return
        getTrainingLogByIdAdmin(Number(id))
    }, [])

    if (!trainingLogById) {
        return <h2>There is no training logs</h2>
    }


    return (
        <div>
            <h2>Workout summary</h2>
            <p>{trainingLogById.workoutSummary}</p>

            <h2>Feedback</h2>
            <p>{trainingLogById.aiFeedback}</p>
            <p>{trainingLogById.createdAt.slice(0, 10)}</p>
            <div>

            </div>
            <button onClick={() => { deleteTrainingLogByIdAdmin(Number(id)) }}>Delete training log</button>
        </div>
    )
}

export default AdminSingleTrainingLog
