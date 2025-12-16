import type { IUser } from "../Admin/IUsers";

export interface INutritionPlan {
    id: string;
    title: string;
    createdAt: string
}

export interface INutritionPlanAdmin {
    id: string;
    title: string;
    createdAt: string
    user: IUser;
}


interface Week {
    day1: Meal[]
    day2: Meal[]
    day3: Meal[]
    day4: Meal[]
    day5: Meal[]
    day6: Meal[]
    day7: Meal[]
}

interface Meal {
    meal: string;
    items: string[];
    calories: number;
    macros: Macros;
}

interface Macros {
    protein: number
    carbs: number
    fat: number
}



interface DailyEsitimates {
    calories: number;
    macros: Macros
}


interface INutritionPlanMeals {
    week1: Week;
    week2: Week;
    week3: Week;
    week4: Week;

    daily_estimates: DailyEsitimates

    snacks: string[]
    snack_suggestions: string[]

    drinks: string[]
    drink_suggestions: string[]

    meal_prep_tips: string[];
    motivation_tips: string[]
}

export interface INutritionPlans {
    id: string;
    title: string;
    meals: INutritionPlanMeals;
    createdAt: string;
} 