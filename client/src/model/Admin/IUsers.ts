export interface IUser {
    id: string;
    email: string;
    name: string;
    password: string
    role: string
    provider?: string
    providerId?: string
    stripeCustomerId?: string
    createdAt: string
}