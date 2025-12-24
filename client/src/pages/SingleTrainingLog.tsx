import { useNavigate, useParams } from "react-router-dom"
import useTrainingLogs from "../hooks/useTrainingLogs"
import { useEffect } from "react"

const SingleTrainingLog = () => {
    const { getTrainingLogById, trainingLogById, deleteTrainingLogById } = useTrainingLogs()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!id) return

        getTrainingLogById(Number(id))
    }, [])


    if (!trainingLogById) {
        return <p>There is no training log</p>
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
                        <button className="single-log-button delete-button" onClick={() => { deleteTrainingLogById(Number(id)); navigate("/training-logs") }}>Delete training log</button>
                    </div>

                </div >
            </section>
        </div>
    )
}

export default SingleTrainingLog
