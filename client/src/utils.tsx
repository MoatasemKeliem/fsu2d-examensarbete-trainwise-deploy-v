// export const Backend_URL = "http://localhost:3000"
import { FaCheck, FaDrumstickBite, FaDumbbell, FaFemale, FaFish, FaGenderless, FaHome, FaLeaf, FaMale, FaRunning } from "react-icons/fa"
import { MdSignalCellular1Bar, MdSignalCellular2Bar, MdSignalCellular3Bar, MdSignalCellular4Bar } from "react-icons/md"
import { GiBowlOfRice, GiFruitBowl, GiMilkCarton, GiPeanut, GiStrong, GiSugarCane, GiWheat } from "react-icons/gi";
import { loadStripe } from "@stripe/stripe-js"


export const gender = [
    { label: "Male", value: "male", icon: <FaMale /> },
    { label: "Female", value: "female", icon: <FaFemale /> },
    { label: "Other", value: "other", icon: <FaGenderless /> }
]

export const level = [
    { label: "Beginner", value: "beginner", icon: <MdSignalCellular1Bar /> },
    { label: "Intermediate", value: "intermediate", icon: <MdSignalCellular3Bar /> },
    { label: "Advanced", value: "advanced", icon: <MdSignalCellular4Bar /> },
]

export const goal = [
    { label: "General Fitness", value: "general_fitness", icon: <FaRunning /> },
    { label: "Muscle Gain", value: "muscle_gain", icon: <FaDumbbell /> },
    { label: "Fat Loss", value: "fat_loss", icon: <FaRunning /> },
    { label: "Strenght", value: "strength", icon: <GiStrong /> },
    { label: "Endurance", value: "endurance", icon: <FaRunning /> },
]

export const preferredWorkoutType = [
    { label: "Mixed", value: "mixed", icon: <FaDumbbell /> },
    { label: "Gym", value: "gym", icon: <FaDumbbell /> },
    { label: "Home", value: "home", icon: <FaHome /> },
]

export const style = [
    { label: "Mixed", value: "mixed", icon: <GiStrong /> },
    { label: "Bodybuildning", value: "bodybuildning", icon: <GiStrong /> },
    { label: "Crossfit", value: "crossfit", icon: <GiStrong /> },
    { label: "Powerlift", value: "strength", icon: <GiStrong /> },
    { label: "Cardio", value: "cardio", icon: <FaRunning /> }
]

export const activityLevel = [
    { label: "Light", value: "light", icon: <MdSignalCellular1Bar /> },
    { label: "Moderate", value: "moderate", icon: <MdSignalCellular2Bar /> },
    { label: "Active", value: "active", icon: <MdSignalCellular3Bar /> },
    { label: "Very active", value: "very_active", icon: <MdSignalCellular4Bar /> },
]

export const dietaryPreferences = [
    { label: "None", value: "", icon: <FaCheck /> },
    { label: "Vegetarian", value: "vegetarian", icon: <FaLeaf /> },
    { label: "Vegan", value: "vegan", icon: <GiFruitBowl /> },
    { label: "Halal", value: "halal", icon: <FaDrumstickBite /> },
    { label: "Kosher", value: "kosher", icon: <GiBowlOfRice /> },
    { label: "Gluten-Free", value: "gluten-free", icon: <GiWheat /> },
    { label: "Lactose-Free", value: "lactose-free", icon: <GiMilkCarton /> },
    { label: "Nut-Free", value: "nut-free", icon: <GiPeanut /> },
    { label: "Sugar-Free", value: "sugar-free", icon: <GiSugarCane /> },
    { label: "Pescatarian", value: "pescatarian", icon: <FaFish /> },
    { label: "Diabetic-Friendly", value: "diabetic-friendly", icon: <MdSignalCellular1Bar /> },
]

export const articleCaetgory = [
    { label: "General Fitness", value: "general_fitness", icon: <FaRunning /> },
    { label: "Muscle Gain", value: "muscle_gain", icon: <FaDumbbell /> },
    { label: "Fat Loss", value: "fat_loss", icon: <FaRunning /> },
    { label: "Strenght", value: "strength", icon: <GiStrong /> },
    { label: "Endurance", value: "endurance", icon: <FaRunning /> },
    { label: "Other", value: "other", icon: <FaRunning /> },
]

export const stripePromise = loadStripe(
    import.meta.env.STRIPE_PROMISE
)