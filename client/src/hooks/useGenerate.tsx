import type { INutritionPlan, ITrainingLog, ITrainingPlan } from '../model/IPlans'
import axios from 'axios'
import { Backend_URL } from '../utils'
import { useNavigate } from 'react-router-dom'

const useGenerate = () => {
    const navigate = useNavigate()

    const generateTrainingPlan = async (payload: ITrainingPlan) => {
        try {
            await axios.post(`${Backend_URL}/ai/generate-training-plan`, payload, { withCredentials: true })
            navigate("/training-plans")
        } catch (error) {
            console.error("Couldn't generate training plan", error)
            throw new Error()
        }
    }


    const generateNutritionPlan = async (payload: INutritionPlan) => {
        try {
            await axios.post(`${Backend_URL}/ai/generate-nutrition-plan`, payload, { withCredentials: true })
            navigate("/nutritions")
        } catch (error) {
            console.error("Couldn't generate nutrition plan", error)
            throw new Error()
        }
    }


    const generateTrainingLog = async (payload: ITrainingLog) => {
        try {
            await axios.post(`${Backend_URL}/ai/generate-training-log`, payload, { withCredentials: true })
            navigate("/training-logs")
        } catch (error) {
            console.error("Couldn't generate training log", error)
            throw new Error()
        }
    }




    return { generateTrainingPlan, generateNutritionPlan, generateTrainingLog }
}

export default useGenerate
