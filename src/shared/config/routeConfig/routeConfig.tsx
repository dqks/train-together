import type { RouteProps } from "react-router";
import { MainPage } from "../../../pages/MainPage";
import { AuthPage } from "../../../pages/AuthPage";

export enum AppRoutes {
    MAIN = "main",
    REGISTRATION = "registration",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.REGISTRATION]: "/registration",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.REGISTRATION]: {
        path: RoutePath.registration,
        element: <AuthPage/>
    }
}