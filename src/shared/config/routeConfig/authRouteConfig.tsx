import type { RouteProps } from 'react-router';
import { ProgramsPage } from '../../../pages/ProgramsPage';
import { MyProgramsPage } from '../../../pages/MyProgramsPage';
import { ExercisesPage } from '../../../pages/ExercisesPage';
import { ProfilePage } from '../../../pages/ProfilePage';
import { ExerciseDetailsPage } from '../../../pages/ExerciseDetailsPage';
import { ProgramDetailsPage } from '../../../pages/ProgramDetailsPage';
import { MyExercisesPage } from '@/pages/MyExercisesPage';
import { FavouriteProgramsPage } from '@/pages/FavouriteProgramsPage';

export enum AuthAppRoutes {
    MY_PROFILE = 'my_profile',
    PROFILE = 'profile',
    EXERCISES = 'exercises',
    EXERCISE_DETAILS = 'exercise_details',
    PROGRAMS = 'programs',
    PROGRAM_DETAILS = 'program_details',
    MY_PROGRAMS = 'my_programs',
    MY_EXERCISES = 'my_exercises',
    FAVOURITE_PROGRAMS = 'favourite_programs',
}

export const AuthRoutePath: Record<AuthAppRoutes, string> = {
    [AuthAppRoutes.MY_PROFILE]: '/app/profile',
    [AuthAppRoutes.PROFILE]: '/app/profile/', // + id
    [AuthAppRoutes.EXERCISES]: '/app/exercises',
    [AuthAppRoutes.EXERCISE_DETAILS]: '/app/exercises/', // + id
    [AuthAppRoutes.PROGRAMS]: '/app/programs',
    [AuthAppRoutes.PROGRAM_DETAILS]: '/app/programs/', // + id
    [AuthAppRoutes.MY_PROGRAMS]: '/app/my-programs',
    [AuthAppRoutes.MY_EXERCISES]: '/app/my-exercises',
    [AuthAppRoutes.FAVOURITE_PROGRAMS]: '/app/favourite-programs',
};

export const authRouteConfig: Record<AuthAppRoutes, RouteProps> = {
    [AuthAppRoutes.MY_PROFILE]: {
        path: AuthRoutePath.profile,
        element: <ProfilePage />,
    },
    [AuthAppRoutes.PROFILE]: {
        path: `${AuthRoutePath.profile}:id`,
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
    [AuthAppRoutes.MY_PROGRAMS]: {
        path: AuthRoutePath.my_programs,
        element: <MyProgramsPage />,
    },
    [AuthAppRoutes.MY_EXERCISES]: {
        path: AuthRoutePath.my_exercises,
        element: <MyExercisesPage />,
    },
    [AuthAppRoutes.FAVOURITE_PROGRAMS]: {
        path: AuthRoutePath.favourite_programs,
        element: <FavouriteProgramsPage />,
    },
};
