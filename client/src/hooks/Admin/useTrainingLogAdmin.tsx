import { useState } from 'react'
import type { IAdminTrainingLogsRender, ITrainingLogsRender } from '../../model/render-models/ITrainingLogsRender'
import axios from 'axios'
import { Backend_URL } from '../../utils'
import { useNavigate } from 'react-router-dom'

const useTrainingLogAdmin = () => {
    const [allTrainingLogs, setAllTrainingLogs] = useState<IAdminTrainingLogsRender[]>([])
    const [trainingLogById, setTrainingLogById] = useState<ITrainingLogsRender | null>(null)
    const navigate = useNavigate()


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


    const getTrainingLogByIdAdmin = async (id: number) => {
        try {
            const response = await axios.get(`${Backend_URL}/admin/training-log/${id}`, { withCredentials: true })
            const data = response.data
            setTrainingLogById(data.trainingLog)
        } catch (error) {
            console.error("Couldn't delete nutrition plan for admin: ", error)
            throw new Error()
        }
    }

    const deleteTrainingLogByIdAdmin = async (id: number) => {
        try {
            await axios.delete(`${Backend_URL}/admin/training-log/${id}`, { withCredentials: true })
            navigate("/admin")
        } catch (error) {
            console.error("Couldn't delete nutrition plan for admin: ", error)
            throw new Error()
        }
    }

    return {
        getAllTrainingLogs, getTrainingLogByIdAdmin, deleteTrainingLogByIdAdmin,
        allTrainingLogs, trainingLogById
    }
}

export default useTrainingLogAdmin
