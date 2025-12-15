import axios from 'axios'
import { useState } from 'react'
import { Backend_URL } from '../utils'
import type { INutritionPlan, INutritionPlans } from '../model/render-models/InutritionPlans'

const useNutrition = () => {
    const [allNutrition, setAllNutrition] = useState<INutritionPlan[]>([])
    const [nutritionById, setNutritionById] = useState<INutritionPlans | null>(null)


    const getAllNutritionPlans = async () => {
        try {
            const response = await axios.get(`${Backend_URL}/nutrition-plan`, { withCredentials: true })
            const data = response.data;
            setAllNutrition(data.nutritionPlan)

        } catch (error) {
            console.error("Couldn't get nutrition plan", error)
            throw new Error()
        }
    }

    const getNutritionPlanById = async (id: string) => {
        try {
            const response = await axios.get(`${Backend_URL}/nutrition-plan/${id}`, { withCredentials: true })
            const data = response.data;
            setNutritionById(data.nutritionPlan)
        } catch (error) {
            console.error("Couldn't get nutrition plan", error)
            throw new Error()
        }
    }

    const deleteNutritionPlanById = async (id: string) => {
        try {
            await axios.delete(`${Backend_URL}/nutrition-plan/${id}`, { withCredentials: true })
        } catch (error) {
            console.error("Couldn't delete nutrition plan", error)
            throw new Error()
        }
    }


    return {
        getAllNutritionPlans, getNutritionPlanById, deleteNutritionPlanById,
        allNutrition, nutritionById
    }
}

export default useNutrition
