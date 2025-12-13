import { useState } from 'react'
import type { ITrainingLog } from '../model/IPlans'
import { Backend_URL } from '../utils'
import axios from 'axios'

const useTrainingLogs = () => {
    const [allTrainingLogs, setAllTrainingLogs] = useState<ITrainingLog[]>([])
    const [trainingLogById, setTrainingLogById] = useState<ITrainingLog | null>(null)

    const getAllTrainingLogs = async () => {
        try {
            const response = await axios.get(`${Backend_URL}/training-log`, { withCredentials: true })
            const data = await response.data
            setAllTrainingLogs(data)
        } catch (error) {
            console.log("Couldn't get training log")
            throw new Error()
        }
    }

    return {
        getAllTrainingLogs,
        allTrainingLogs
    }
}

export default useTrainingLogs
