import { useState } from 'react'
import type { IAdminTrainingPlans, IRenderSingleTrainingPlan } from '../../model/render-models/ITrainingsPlanRender'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const useTrainingPlanAdmin = () => {
    const [allTrainingPlansAdmin, setAllTrainingPlansAdmin] = useState<IAdminTrainingPlans[]>([])
    const [trainingPlansByIdAdmin, setTrainingPlansByIdAdmin] = useState<IRenderSingleTrainingPlan | null>(null)
    const navigate = useNavigate()
    const Backend_URL = import.meta.env.VITE_API_URL;


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

    const getTrainingPlansByIdAdmin = async (id: string) => {
        try {
            const response = await axios.get(`${Backend_URL}/admin/training-plan/${id}`, { withCredentials: true })
            const data = response.data
            setTrainingPlansByIdAdmin(data)
        } catch (error) {
            console.error("Couldn't get training plan for admin: ", error)
            throw new Error()
        }
    }

    const deleteTrainingPlansByIdAdmin = async (id: string) => {
        try {
            await axios.delete(`${Backend_URL}/admin/training-plan/${id}`, { withCredentials: true })
            navigate("/admin")
        } catch (error) {
            console.error("Couldn't delete training plan for admin: ", error)
            throw new Error()
        }
    }

    return {
        getAllTrainingPlansAdmin, getTrainingPlansByIdAdmin, deleteTrainingPlansByIdAdmin,
        allTrainingPlansAdmin, trainingPlansByIdAdmin
    }
}

export default useTrainingPlanAdmin
