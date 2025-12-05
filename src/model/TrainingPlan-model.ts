export interface ITrainingPlan {
    gender: string;
    age: number;
    heightCm: number;
    weightKg: number;
    title?: string;
    experienceLevel: "beginner" | "intermediate" | "advanced";
    goal: "muscle_gain" | "fat_loss" | "strength" | "endurance" | "general_fitness";
    workoutDaysPerWeek: number;
    preferredWorkoutType: "gym" | "home" | "mixed";
    style?: "bodybuildning" | "crossfit" | "powerlift" | "cardio" | "mixed";
    injuries?: string;
}