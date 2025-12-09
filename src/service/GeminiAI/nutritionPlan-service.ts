import { GoogleGenAI } from "@google/genai"
import dotenv from "dotenv"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/User"
import { NutritionPlan } from "../../entities/NutritionPlan"

dotenv.config({ quiet: true })

const ai = new GoogleGenAI({})

export const generateNutritionPlan = async (userData: any, userId: string) => {

    const model = "gemini-2.5-flash-lite"

    const userPrompt = `
    You are a certified nutrition expert. Create a 4-week personalized nutrition plan for the user based on the following information:

- Gender: ${userData.gender}
- Age: ${userData.age}
- Height: ${userData.heightCm} cm
- Weight: ${userData.weightKg} kg
- Goal: ${userData.goal} 
- Experience Level: ${userData.experienceLevel}
- Available Days Per Week for meals prep: ${userData.availableDaysPerWeek}
- Preferred style: ${userData.style || ""}
- Allergies or dietary restrictions: ${userData.allergies || ""}

The nutrition plan **must follow this JSON structure exactly**:

{
  "week1": {day1: [{"meal": "string", "items": ["string"], "calories": 0, "macros": {"protein": 0, "carbs": 0, "fat": 0}}], day2: [{"meal": "string", "items": ["string"], "calories": 0, "macros": {"protein": 0, "carbs": 0, "fat": 0}}]...},
  "week2": {day1: [{"meal": "string", "items": ["string"], "calories": 0, "macros": {"protein": 0, "carbs": 0, "fat": 0}}], day2: [{"meal": "string", "items": ["string"], "calories": 0, "macros": {"protein": 0, "carbs": 0, "fat": 0}}]...},
  "week3": {day1: [{"meal": "string", "items": ["string"], "calories": 0, "macros": {"protein": 0, "carbs": 0, "fat": 0}}], day2: [{"meal": "string", "items": ["string"], "calories": 0, "macros": {"protein": 0, "carbs": 0, "fat": 0}}]...},
  "week4": {day1: [{"meal": "string", "items": ["string"], "calories": 0, "macros": {"protein": 0, "carbs": 0, "fat": 0}}], day2: [{"meal": "string", "items": ["string"], "calories": 0, "macros": {"protein": 0, "carbs": 0, "fat": 0}}]...},
  "daily_estimates": {"calories": 0, "macros": {"protein": 0, "carbs": 0, "fat": 0}},
  "snacks": [],
  "snack_suggestions": [],
  "drinks": [],
  "drink_suggestions": [],
  "meal_prep_tips": [],
  "motivation_tips": []
}

- Include macro breakdowns (protein, carbs, fat) for every meal.
- 4 weeks each day should have there own nutrition plan for the day
- Include estimated calories for every meal and daily total.
- Snacks, drinks, tips must always be present as arrays (even if empty).
- Return valid JSON **without markdown or extra text**.

    `;


    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: [
                {
                    role: "user",
                    parts: [{ text: userPrompt }]
                },
            ],

            config: {
                systemInstruction: "You are a certified nutrition expert specializing in personlized nutrition plan"
            }
        });


        let clearPlan = response.text || "";
        clearPlan = clearPlan?.replace(/^```json\s*/i, '')
        clearPlan = clearPlan?.replace(/\s*```\s*$/i, '');
        const nutritionPlan = JSON.parse(clearPlan)

        const nutritionPlanRepository = AppDataSource.getRepository(NutritionPlan)
        const userRepository = AppDataSource.getRepository(User)

        const user = await userRepository.findOne({ where: { id: userId } })

        if (!user) {
            throw new Error("User not found")
        }

        const newNutritionPlan = nutritionPlanRepository.create({
            title: `${userData.title}`,
            meals: nutritionPlan,
            user
        })

        await nutritionPlanRepository.save(newNutritionPlan)

        return newNutritionPlan

    } catch (error) {
        console.error("Couldn't generate nutrition plan", error)
        return "ERROR: Couldn't generate nutrition plan"
    }
}