export const Backend_URL = "http://localhost:3000"
import { FaDumbbell, FaFemale, FaHome, FaMale, FaRunning } from "react-icons/fa"
import { MdSignalCellular1Bar, MdSignalCellular3Bar, MdSignalCellular4Bar } from "react-icons/md"
import { GiStrong } from "react-icons/gi";


export const gender = [
    { label: "Male", value: "male", icon: <FaMale /> },
    { label: "Female", value: "female", icon: <FaFemale /> },
    { label: "Other", value: "other" }
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