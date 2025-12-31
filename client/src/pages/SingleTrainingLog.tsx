import { useNavigate, useParams } from "react-router-dom"
import useTrainingLogs from "../hooks/useTrainingLogs"
import { useEffect } from "react"
import { ImSad2 } from "react-icons/im"

const SingleTrainingLog = () => {
    const { getTrainingLogById, trainingLogById, deleteTrainingLogById } = useTrainingLogs()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!id) return

        getTrainingLogById(String(id))
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

                <div >
                    <h2 className="singel-page-h4">Workout summary</h2>
                    <p className="singel-page-date">{trainingLogById.createdAt.slice(0, 10)}</p>

                    <p className="singel-page-day-exercies">{trainingLogById.workoutSummary}</p>

                    <h2 className="singel-page-h4">Feedback</h2>
                    <p>{trainingLogById.aiFeedback}</p>

                    <div className='button-div'>
                        <button className="single-log-button delete-button" onClick={() => { deleteTrainingLogById(String(id)); navigate("/training-logs") }}>Delete training log</button>
                    </div>

                </div >
            </section>
        </div>
    )
}

export default SingleTrainingLog
