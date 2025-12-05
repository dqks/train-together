import type { RouteProps } from 'react-router';
import { ProgramsPage } from '../../../pages/ProgramsPage';
import { MyProgramsPage } from '../../../pages/MyProgramsPage';
import { ExercisesPage } from '../../../pages/ExercisesPage';
import { ProfilePage } from '../../../pages/ProfilePage';
import { ExerciseDetailsPage } from '../../../pages/ExerciseDetailsPage';
import { ProgramDetailsPage } from '../../../pages/ProgramDetailsPage';

export enum AuthAppRoutes {
    MY_PROFILE = 'my_profile',
    PROFILE = 'profile',
    EXERCISES = 'exercises',
    EXERCISE_DETAILS = 'exercise_details',
    PROGRAMS = 'programs',
    PROGRAM_DETAILS = 'program_details',
    YOUR_PROGRAMS = 'my_programs',
}

export const AuthRoutePath: Record<AuthAppRoutes, string> = {
    [AuthAppRoutes.MY_PROFILE]: '/app/profile',
    [AuthAppRoutes.PROFILE]: '/app/profile/:userId?',
    [AuthAppRoutes.EXERCISES]: '/app/exercises',
    [AuthAppRoutes.EXERCISE_DETAILS]: '/app/exercises/', // + id
    [AuthAppRoutes.PROGRAMS]: '/app/programs',
    [AuthAppRoutes.PROGRAM_DETAILS]: '/app/programs/', // + id
    [AuthAppRoutes.YOUR_PROGRAMS]: '/app/my-programs',
};

export const authRouteConfig: Record<AuthAppRoutes, RouteProps> = {
    [AuthAppRoutes.MY_PROFILE]: {
        path: AuthRoutePath.profile,
        element: <ProfilePage />,
    },
    [AuthAppRoutes.PROFILE]: {
        path: AuthRoutePath.profile,
        element: <ProfilePage />,
    },
    [AuthAppRoutes.EXERCISES]: {
        path: AuthRoutePath.exercises,
        element: <ExercisesPage />,
    },
    [AuthAppRoutes.PROGRAMS]: {
        path: AuthRoutePath.programs,
        element: <ProgramsPage />,
    },
    [AuthAppRoutes.PROGRAM_DETAILS]: {
        path: `${AuthRoutePath.program_details}:id`,
        element: <ProgramDetailsPage />,
    },
    [AuthAppRoutes.EXERCISE_DETAILS]: {
        path: `${AuthRoutePath.exercise_details}:id`,
        element: <ExerciseDetailsPage />,
    },
    [AuthAppRoutes.YOUR_PROGRAMS]: {
        path: AuthRoutePath.my_programs,
        element: <MyProgramsPage />,
    },
};
