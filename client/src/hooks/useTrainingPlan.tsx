import axios from 'axios'
import { useState } from 'react'
import { Backend_URL } from '../utils'
import type { IRenderTrainingPlans } from '../model/IRender'

const useTrainingPlan = () => {
    const [allTrainingPlans, setAllTrainingPlans] = useState<IRenderTrainingPlans | null>(null)

    const getAllTrainingPlans = async () => {
        try {
            const response = await axios.get(`${Backend_URL}/training-plan`, { withCredentials: true })
            const data = await response.data
            setAllTrainingPlans(data)
        } catch (error) {
            console.log("Couldn't get all training plans")
            throw new Error()
        }
    }



    return {
        getAllTrainingPlans,
        allTrainingPlans
    }
}

export default useTrainingPlan
