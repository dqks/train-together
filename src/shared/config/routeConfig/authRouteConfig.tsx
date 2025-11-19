import type { RouteProps } from "react-router";
import { ExercisePage } from "../../../pages/ExercisePage";
import { ProgramsPage } from "../../../pages/ProgramsPage";
import { MyProgramsPage } from "../../../pages/MyProgramsPage";
import { Suspense } from "react";
import { ProfilePage } from "../../../pages/ProfilePage/ui/ProfilePage";

export enum AuthAppRoutes {
    MY_PROFILE = "my_profile",
    PROFILE = "profile",
    EXERCISES = "exercises",
    PROGRAMS = "programs",
    YOUR_PROGRAMS = "myPrograms",
}

export const AuthRoutePath: Record<AuthAppRoutes, string> = {
    [AuthAppRoutes.MY_PROFILE]: "/app/profile",
    [AuthAppRoutes.PROFILE]: "/app/profile/:userId?",
    [AuthAppRoutes.EXERCISES]: "/app/exercises",
    [AuthAppRoutes.PROGRAMS]: "/app/programs",
    [AuthAppRoutes.YOUR_PROGRAMS]: "/app/my-programs",
}

export const authRouteConfig: Record<AuthAppRoutes, RouteProps> = {
    [AuthAppRoutes.MY_PROFILE]: {
        path: AuthRoutePath.profile,
        element: <Suspense fallback={<div>Loading</div>}>
                <ProfilePage/>
            </Suspense>
    },
    [AuthAppRoutes.PROFILE]: {
        path: AuthRoutePath.profile,
        element: <Suspense fallback={<div>Loading</div>}>
                <ProfilePage/>
            </Suspense>
    },
    [AuthAppRoutes.EXERCISES]: {
        path: AuthRoutePath.exercises,
        element: <Suspense fallback={<div>Loading</div>}>
                <ExercisePage/>
            </Suspense>
    },
    [AuthAppRoutes.PROGRAMS]: {
        path: AuthRoutePath.programs,
        element: <Suspense fallback={<div>Loading</div>}>
                <ProgramsPage/>
            </Suspense>
    },
    [AuthAppRoutes.YOUR_PROGRAMS]: {
        path: AuthRoutePath.myPrograms,
        element: <Suspense fallback={<div>Loading</div>}>
                <MyProgramsPage/>
            </Suspense>
    },
}