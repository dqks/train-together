import type { RouteProps } from "react-router";
import { MainPage } from "../../../pages/MainPage";
import { AuthPage } from "../../../pages/AuthPage";

export enum AppRoutes {
    LANDING = "landing",
    REGISTRATION = "registration",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.LANDING]: "/",
    [AppRoutes.REGISTRATION]: "/registration",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.LANDING]: {
        path: RoutePath.landing,
        element: <MainPage/>
    },
    [AppRoutes.REGISTRATION]: {
        path: RoutePath.registration,
        element: <AuthPage/>
    }
}