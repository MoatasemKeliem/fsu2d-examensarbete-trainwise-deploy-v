import type { IUser } from "../Admin/IUsers";

export interface ITrainingLogsRender {
    id: number;
    workoutSummary: string
    aiFeedback: string
    createdAt: string
}

export interface IAdminTrainingLogsRender {
    id: number;
    workoutSummary: string
    aiFeedback: string
    createdAt: string
    user: IUser
}

