import type { IUser } from "../Admin/IUsers";

export interface ITrainingLogsRender {
    id: string;
    workoutSummary: string
    aiFeedback: string
    createdAt: string
}

export interface IAdminTrainingLogsRender {
    id: string;
    workoutSummary: string
    aiFeedback: string
    createdAt: string
    user: IUser
}

