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
        <div className="singel-page-page">
            <section className="singel-page-log-div">

                <h2 className="singel-page-h4">Workout summary</h2>
                <p>{trainingLogById.createdAt.slice(0, 10)}</p>
                <p className="singel-page-day-exercies">{trainingLogById.workoutSummary}</p>

                <h2 className="singel-page-h4">Feedback</h2>
                <p>{trainingLogById.aiFeedback}</p>

                <div>

                </div>
                <div className='button-div'>
                    <button className="single-log-button delete-button" onClick={() => { deleteTrainingLogByIdAdmin(Number(id)) }}>Delete training log</button>
                </div>
            </section>
        </div>
    )
}

export default AdminSingleTrainingLog
