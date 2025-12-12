import type { ReactNode } from "react";

export interface IProtectedRoutes {
    children: ReactNode;
    usersRole: string;
}