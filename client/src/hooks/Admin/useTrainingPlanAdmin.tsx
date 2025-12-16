import { useState } from 'react'
import type { IAdminTrainingPlans } from '../../model/render-models/ITrainingsPlanRender'
import axios from 'axios'
import { Backend_URL } from '../../utils'

const useTrainingPlanAdmin = () => {
    const [allTrainingPlansAdmin, setAllTrainingPlansAdmin] = useState<IAdminTrainingPlans[]>([])

    const getAllTrainingPlansAdmin = async () => {
        try {
            const response = await axios.get(`${Backend_URL}/admin/training-plan`, { withCredentials: true })
            const data = response.data
            setAllTrainingPlansAdmin(data.trainingPlan)
        } catch (error) {
            console.error("Couldn't get training plan for admin: ", error)
            throw new Error()
        }
    }

    return {
        getAllTrainingPlansAdmin,
        allTrainingPlansAdmin
    }
}

export default useTrainingPlanAdmin
