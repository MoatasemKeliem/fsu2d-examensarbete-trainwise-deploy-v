import { useParams } from "react-router-dom"
import useTrainingLogs from "../hooks/useTrainingLogs"
import { useEffect } from "react"

const SingleTrainingLog = () => {
    const { getTrainingLogById, trainingLogById } = useTrainingLogs()
    const { id } = useParams()

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

                <button>Delete Training Log</button>

            </div >
        </div>
    )
}

export default SingleTrainingLog
