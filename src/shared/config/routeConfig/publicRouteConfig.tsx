import type { RouteProps } from 'react-router';
import { MainPage } from '../../../pages/LandingPage';
import { LoginPage } from '../../../pages/AuthPage';
import { RegisterPage } from '../../../pages/RegisterPage';
import { NotFoundPage } from '../../../pages/NotFoundPage';

export enum PublicAppRoutes {
    LANDING = 'landing',
    REGISTRATION = 'registration',
    LOGIN = 'login',
    NOT_FOUND = 'not_found',
}

export const PublicRoutePath: Record<PublicAppRoutes, string> = {
    [PublicAppRoutes.LANDING]: '/',
    [PublicAppRoutes.REGISTRATION]: '/registration',
    [PublicAppRoutes.LOGIN]: '/login',
    [PublicAppRoutes.NOT_FOUND]: '*',
};

export const publicRouteConfig: Record<PublicAppRoutes, RouteProps> = {
    [PublicAppRoutes.LANDING]: {
        path: PublicRoutePath.landing,
        element: <MainPage />,
    },
    [PublicAppRoutes.REGISTRATION]: {
        path: PublicRoutePath.registration,
        element: <RegisterPage />,
    },
    [PublicAppRoutes.LOGIN]: {
        path: PublicRoutePath.login,
        element: <LoginPage />,
    },
    [PublicAppRoutes.NOT_FOUND]: {
        path: PublicRoutePath.not_found,
        element: <NotFoundPage />,
    },
};
