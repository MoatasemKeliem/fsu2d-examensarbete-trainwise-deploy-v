export interface IRenderTrainingPlans {
    trainingPlan: TrainingPlans[]
}

interface TrainingPlans {
    id: string;
    title: string;
    plan: TrainingWeek[];
    createdAt: string
}

interface TrainingWeek {
    week: string;
    days: TrainingDay[]
}

interface TrainingDay {
    day: string;
    exercises: Exercise[]
    caloriesBurned: number;
    motivation: string;
    nutritionTips: string;
}

interface Exercise {
    name: string;
    sets: number;
    reps: string;
}