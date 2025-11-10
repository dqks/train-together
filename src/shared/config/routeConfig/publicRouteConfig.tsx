import type { RouteProps } from "react-router";
import { MainPage } from "../../../pages/MainPage";
import { AuthPage } from "../../../pages/AuthPage";

export enum PublicAppRoutes {
    LANDING = "landing",
    REGISTRATION = "registration",
}

export const PublicRoutePath: Record<PublicAppRoutes, string> = {
    [PublicAppRoutes.LANDING]: "/",
    [PublicAppRoutes.REGISTRATION]: "/registration",
}

export const publicRouteConfig: Record<PublicAppRoutes, RouteProps> = {
    [PublicAppRoutes.LANDING]: {
        path: PublicRoutePath.landing,
        element: <MainPage/>
    },
    [PublicAppRoutes.REGISTRATION]: {
        path: PublicRoutePath.registration,
        element: <AuthPage/>
    },
}