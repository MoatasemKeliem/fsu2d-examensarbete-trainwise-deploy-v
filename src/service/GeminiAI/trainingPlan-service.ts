import { GoogleGenAI } from "@google/genai"
import dotenv from "dotenv"
import { AppDataSource } from "../../data-source"
import { TrainingPlan } from "../../entities/TrainingPlan"
import { User } from "../../entities/User"
import { ITrainingPlan } from "../../model/TrainingPlan-model"

dotenv.config({ quiet: true })

const ai = new GoogleGenAI({})

export const generateTrainingPlan = async (userData: ITrainingPlan, userId: string) => {

    const model = "gemini-2.5-flash-lite"

    const userPrompt = `
    You are a professional fitness coach. Generate a 4-week personalized workout plan based on the following user information:

- Gender: ${userData.gender}
- Age: ${userData.age}
- Height: ${userData.heightCm} cm
- Weight: ${userData.weightKg} kg
- Goal: ${userData.goal}
- Experience Level: ${userData.experienceLevel}
- Workout Frequency: ${userData.workoutDaysPerWeek} workouts/week
- Preferred Workout Type: ${userData.preferredWorkoutType}
${userData.style ? `- Style: ${userData.style}` : ""}
${userData.injuries ? `- Injuries or Limitations: ${userData.injuries}` : ""}

Requirements:

1. Return **only valid JSON**. Do not include markdown, code blocks, or explanations. without any "\n" or extra characters.
2. The JSON should be an **array of weeks**. Each week is an object with:  
   - "week": week number as string ("week1", "week2", etc.)  
   - "days": array of day objects  
3. Each day object should have:  
   - "day": Name of the day  
   - "exercises": array of exercises with "name", "sets", "reps"  
   - "caloriesBurned": estimated calories burned for the day  
   - "motivation": short motivational tip  
   - "nutritionTips": optional nutrition advice  

Example output:

[
  {
    "week": "week1",
    "days": [
      {
        "day": "Monday",
        "exercises": [
          {"name": "Squats", "sets": 4, "reps": "10-12"},
          {"name": "Push-ups", "sets": 3, "reps": "12-15"}
        ],
        "caloriesBurned": 450,
        "motivation": "Keep pushing!",
        "nutritionTips": "Drink plenty of water before and after training"
      },
      ...
    ]
  },
  ...
]
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
                systemInstruction: "You are a certified fitness coach specializing in personlized workout"
            }
        });

        let clearPlan = response.text || "";
        clearPlan = clearPlan?.replace(/^```json\s*/i, '')
        clearPlan = clearPlan?.replace(/\s*```\s*$/i, '');
        const traninigPlan = JSON.parse(clearPlan)

        const trainingPlanRepository = AppDataSource.getRepository(TrainingPlan)
        const userRepository = AppDataSource.getRepository(User)

        const user = await userRepository.findOne({ where: { id: userId } })

        if (!user) {
            throw new Error("User not found")
        }

        const newTrainingPlan = trainingPlanRepository.create({
            title: `${userData.title}`,
            plan: traninigPlan,
            user
        })

        await trainingPlanRepository.save(newTrainingPlan)

        return newTrainingPlan

    } catch (error) {
        console.error("Couldn't generate training plan", error)
        return "ERROR: Couldn't generate training plan"
    }
}