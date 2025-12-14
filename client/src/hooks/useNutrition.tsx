import axios from 'axios'
import { useState } from 'react'
import { Backend_URL } from '../utils'
import type { INutritionPlan } from '../model/render-models/InutritionPlans'

const useNutrition = () => {
    const [allNutrition, setAllNutrition] = useState<INutritionPlan[]>([])


    const getAllNutritionPlans = async () => {
        try {
            const response = await axios.get(`${Backend_URL}/nutrition-plan`, { withCredentials: true })
            const data = response.data;
            setAllNutrition(data.nutritionPlan)

        } catch (error) {
            console.error("Couldn't delete nutrition plan", error)
            throw new Error()
        }
    }


    return {
        getAllNutritionPlans,
        allNutrition
    }
}

export default useNutrition
