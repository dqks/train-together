import type { RouteProps } from "react-router";
import { ExercisePage } from "../../../pages/ExercisePage";

export enum AuthAppRoutes {
    EXERCISES = "exercises",
}

export const AuthRoutePath: Record<AuthAppRoutes, string> = {
    [AuthAppRoutes.EXERCISES]: "/app/exercises",
}

export const authRouteConfig: Record<AuthAppRoutes, RouteProps> = {
    [AuthAppRoutes.EXERCISES]: {
        path: AuthRoutePath.exercises,
        element: <ExercisePage/>
    },
}