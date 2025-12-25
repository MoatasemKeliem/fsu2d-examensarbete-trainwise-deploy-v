import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useTrainingLogAdmin from '../../hooks/Admin/useTrainingLogAdmin'
import { ImSad2 } from 'react-icons/im'

const AdminSingleTrainingLog = () => {
    const { id } = useParams()
    const { deleteTrainingLogByIdAdmin, getTrainingLogByIdAdmin, trainingLogById } = useTrainingLogAdmin()

    useEffect(() => {
        if (!id) return
        getTrainingLogByIdAdmin(Number(id))
    }, [])

    if (!trainingLogById) {
        return (
            <div className="no-content-page">
                <div className="no-content">
                    <ImSad2 className="no-render-icon" />
                    <h2 className="no-content-message">Coludn't find a training log, please try generating a new training log.</h2>
                </div>
            </div>
        )
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
