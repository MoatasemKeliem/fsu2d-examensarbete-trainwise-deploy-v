import type { ITrainingPlan } from '../model/IPlans'
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



    return { generateTrainingPlan }
}

export default useGenerate
