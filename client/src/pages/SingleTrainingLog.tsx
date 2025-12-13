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
        <div>
            <h1>Single Training Log</h1>
            <div >
                <h2>Your workout summary</h2>
                <p>{trainingLogById.workoutSummary}</p>

                <h2>AI feedback</h2>
                <p>{trainingLogById.aiFeedback}</p>
                <p>Created at: {trainingLogById.createdAt.slice(0, 10)}</p>

                <button onClick={() => { deleteTrainingLogById(Number(id)); navigate("/training-logs") }}>Delete training log</button>


            </div >
        </div>
    )
}

export default SingleTrainingLog
