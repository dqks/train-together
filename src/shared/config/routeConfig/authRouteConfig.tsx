import type { RouteProps } from "react-router";
import { ExercisePage } from "../../../pages/ExercisePage";
import { ProgramsPage } from "../../../pages/TrainingProgramsPage";
import { MyProgramsPage } from "../../../pages/YourTrainingProgramsPage";

export enum AuthAppRoutes {
    EXERCISES = "exercises",
    PROGRAMS = "programs",
    YOUR_PROGRAMS = "myPrograms",
}

export const AuthRoutePath: Record<AuthAppRoutes, string> = {
    [AuthAppRoutes.EXERCISES]: "/app/exercises",
    [AuthAppRoutes.PROGRAMS]: "/app/programs",
    [AuthAppRoutes.YOUR_PROGRAMS]: "/app/my-programs",
}

export const authRouteConfig: Record<AuthAppRoutes, RouteProps> = {
    [AuthAppRoutes.EXERCISES]: {
        path: AuthRoutePath.exercises,
        element: <ExercisePage/>
    },
    [AuthAppRoutes.PROGRAMS]: {
        path: AuthRoutePath.programs,
        element: <ProgramsPage/>
    },
    [AuthAppRoutes.YOUR_PROGRAMS]: {
        path: AuthRoutePath.myPrograms,
        element: <MyProgramsPage/>
    },
}