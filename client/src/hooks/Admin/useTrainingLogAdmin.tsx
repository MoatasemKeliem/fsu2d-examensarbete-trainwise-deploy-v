import { useState } from 'react'
import type { IAdminTrainingLogsRender } from '../../model/render-models/ITrainingLogsRender'
import axios from 'axios'
import { Backend_URL } from '../../utils'

const useTrainingLogAdmin = () => {
    const [allTrainingLogs, setAllTrainingLogs] = useState<IAdminTrainingLogsRender[]>([])


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



    return {
        getAllTrainingLogs,
        allTrainingLogs
    }
}

export default useTrainingLogAdmin
