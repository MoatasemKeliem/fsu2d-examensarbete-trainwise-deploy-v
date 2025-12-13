import axios from 'axios'
import { useState } from 'react'
import { Backend_URL } from '../utils'
import type { IRenderSingleTrainingPlan, IRenderTrainingPlans, TrainingPlans } from '../model/render-models/ITrainingsPlanRender'

const useTrainingPlan = () => {
    const [allTrainingPlans, setAllTrainingPlans] = useState<TrainingPlans[]>([])
    const [trainingPlanById, setTrainingPlanById] = useState<IRenderSingleTrainingPlan | null>(null)

    const getAllTrainingPlans = async () => {
        try {
            const response = await axios.get<IRenderTrainingPlans>(`${Backend_URL}/training-plan`, { withCredentials: true })
            const data = response.data
            setAllTrainingPlans(data.trainingPlan)
        } catch (error) {
            console.log("Couldn't get all training plans")
            throw new Error()
        }
    }

    const getTrainingPlanById = async (id: string) => {
        try {
            const response = await axios.get(`${Backend_URL}/training-plan/${id}`, { withCredentials: true })
            const data = await response.data
            setTrainingPlanById(data)
        } catch (error) {
            console.log("Couldn't get training plan")
            throw new Error()
        }
    }

    const deleteTrainingPlanById = async (id: string) => {
        try {
            await axios.delete(`${Backend_URL}/training-plan/${id}`, { withCredentials: true })
        } catch (error) {
            console.error("Couldn't delete training plan", error)
            throw new Error()
        }
    }



    return {
        getAllTrainingPlans, getTrainingPlanById, deleteTrainingPlanById,
        allTrainingPlans, trainingPlanById
    }
}

export default useTrainingPlan
