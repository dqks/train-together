import type { RouteProps } from "react-router";
import { ProgramsPage } from "../../../pages/ProgramsPage";
import { MyProgramsPage } from "../../../pages/MyProgramsPage";
import { ExercisesPage } from "../../../pages/ExercisesPage";
import { ProfilePage } from "../../../pages/ProfilePage";
import { ExercisePage } from "../../../pages/ExercisePage";

export enum AuthAppRoutes {
    MY_PROFILE = "my_profile",
    PROFILE = "profile",
    EXERCISES = "exercises",
    EXERCISE = "exercise",
    PROGRAMS = "programs",
    YOUR_PROGRAMS = "myPrograms",
}

export const AuthRoutePath: Record<AuthAppRoutes, string> = {
    [AuthAppRoutes.MY_PROFILE]: "/app/profile",
    [AuthAppRoutes.PROFILE]: "/app/profile/:userId?",
    [AuthAppRoutes.EXERCISES]: "/app/exercises",
    [AuthAppRoutes.EXERCISE]: "/app/exercises/:exerciseId?",
    [AuthAppRoutes.PROGRAMS]: "/app/programs",
    [AuthAppRoutes.YOUR_PROGRAMS]: "/app/my-programs",
}

export const authRouteConfig: Record<AuthAppRoutes, RouteProps> = {
    [AuthAppRoutes.MY_PROFILE]: {
        path: AuthRoutePath.profile,
        element: <ProfilePage/>
    },
    [AuthAppRoutes.PROFILE]: {
        path: AuthRoutePath.profile,
        element: <ProfilePage/>
    },
    [AuthAppRoutes.EXERCISES]: {
        path: AuthRoutePath.exercises,
        element: <ExercisesPage/>
    },
    [AuthAppRoutes.PROGRAMS]: {
        path: AuthRoutePath.programs,
        element: <ProgramsPage/>
    },
    [AuthAppRoutes.EXERCISE]: {
        path: AuthRoutePath.exercise,
        element: <ExercisePage/>
    },
    [AuthAppRoutes.YOUR_PROGRAMS]: {
        path: AuthRoutePath.myPrograms,
        element: <MyProgramsPage/>
    },
}