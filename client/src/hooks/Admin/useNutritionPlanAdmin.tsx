import { useState } from 'react'
import type { INutritionPlanAdmin } from '../../model/render-models/InutritionPlans'
import axios from 'axios'
import { Backend_URL } from '../../utils'

const useNutritionPlanAdmin = () => {
    const [allNutritionPlansAdmin, setAllNutritionPlansAdmin] = useState<INutritionPlanAdmin[]>([])

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

    return { getAllNutritionPlanAdmin, allNutritionPlansAdmin }
}

export default useNutritionPlanAdmin
