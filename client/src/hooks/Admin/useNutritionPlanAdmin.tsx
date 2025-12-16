import { useState } from 'react'
import type { INutritionPlanAdmin, INutritionPlans } from '../../model/render-models/InutritionPlans'
import axios from 'axios'
import { Backend_URL } from '../../utils'

const useNutritionPlanAdmin = () => {
    const [allNutritionPlansAdmin, setAllNutritionPlansAdmin] = useState<INutritionPlanAdmin[]>([])
    const [nutritionPlansByIdAdmin, setNutritionPlansByIdAdmin] = useState<INutritionPlans | null>(null)

    const getAllNutritionPlanAdmin = async () => {
        try {
            const resposne = await axios.get(`${Backend_URL}/admin/nutrition-plan`, { withCredentials: true })
            const data = resposne.data
            setAllNutritionPlansAdmin(data.nutritionPlan)
        } catch (error) {
            console.error("Couldn't get nutrition plan for admin: ", error)
            throw new Error()
        }
    }

    const getNutritionPlanByIdAdmin = async (id: string) => {
        try {
            const resposne = await axios.get(`${Backend_URL}/admin/nutrition-plan/${id}`, { withCredentials: true })
            const data = resposne.data
            setNutritionPlansByIdAdmin(data.nutritionPlan)
        } catch (error) {
            console.error("Couldn't get nutrition plan for admin: ", error)
            throw new Error()
        }
    }

    return {
        getAllNutritionPlanAdmin, getNutritionPlanByIdAdmin,
        allNutritionPlansAdmin, nutritionPlansByIdAdmin
    }
}

export default useNutritionPlanAdmin
