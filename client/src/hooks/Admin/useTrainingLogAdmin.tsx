import { useState } from 'react'
import type { IAdminTrainingLogsRender } from '../../model/render-models/ITrainingLogsRender'
import axios from 'axios'
import { Backend_URL } from '../../utils'

const useTrainingLogAdmin = () => {
    const [allTrainingLogs, setAllTrainingLogs] = useState<IAdminTrainingLogsRender[]>([])
    const [trainingLogById, setTrainingLogById] = useState<IAdminTrainingLogsRender | null>(null)


    const getAllTrainingLogs = async () => {
        try {
            const response = await axios.get(`${Backend_URL}/admin/training-log`, { withCredentials: true })
            const data = response.data
            setAllTrainingLogs(data.trainingLogs)
        } catch (error) {
            console.error("Couldn't delete nutrition plan for admin: ", error)
            throw new Error()
        }
    }


    const getTrainingLogByIdAdmin = async (id: string) => {
        try {
            const response = await axios.get(`${Backend_URL}/admin/training-log/${id}`, { withCredentials: true })
            const data = response.data
            setTrainingLogById(data.trainingLogs)
        } catch (error) {
            console.error("Couldn't delete nutrition plan for admin: ", error)
            throw new Error()
        }
    }

    const deleteTrainingLogByIdAdmin = async (id: string) => {
        try {
            await axios.delete(`${Backend_URL}/admin/training-log/${id}`, { withCredentials: true })
        } catch (error) {
            console.error("Couldn't delete nutrition plan for admin: ", error)
            throw new Error()
        }
    }

    return {
        getAllTrainingLogs, getTrainingLogByIdAdmin, deleteTrainingLogByIdAdmin,
        allTrainingLogs
    }
}

export default useTrainingLogAdmin
