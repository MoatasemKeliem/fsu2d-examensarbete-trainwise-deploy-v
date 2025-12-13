import { useState } from 'react'
import { Backend_URL } from '../utils'
import axios from 'axios'
import type { ITrainingLogsRender } from '../model/render-models/ITrainingLogsRender'

const useTrainingLogs = () => {
    const [allTrainingLogs, setAllTrainingLogs] = useState<ITrainingLogsRender[]>([])
    const [trainingLogById, setTrainingLogById] = useState<ITrainingLogsRender | null>(null)

    const getAllTrainingLogs = async () => {
        try {
            const response = await axios.get(`${Backend_URL}/training-log`, { withCredentials: true })
            const data = response.data
            setAllTrainingLogs(data.trainingLogs)
        } catch (error) {
            console.log("Couldn't get training log")
            throw new Error()
        }
    }


    const getTrainingLogById = async (id: number) => {
        try {
            const response = await axios.get(`${Backend_URL}/training-log/${id}`, { withCredentials: true })
            const data = response.data
            setTrainingLogById(data.trainingLog)
        } catch (error) {
            console.log("Couldn't get training log")
            throw new Error()
        }
    }



    return {
        getAllTrainingLogs, getTrainingLogById,
        allTrainingLogs, trainingLogById
    }
}

export default useTrainingLogs
