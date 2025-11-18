import type { RouteProps } from "react-router";
import { MainPage } from "../../../pages/LandingPage";
import { AuthPage } from "../../../pages/AuthPage";
import { Suspense } from "react";

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
        element: <Suspense fallback={<div>Loading</div>}>
                    <MainPage/>
                </Suspense>
    },
    [PublicAppRoutes.REGISTRATION]: {
        path: PublicRoutePath.registration,
        element: <Suspense fallback={<div>Loading</div>}>
                    <AuthPage/>
                </Suspense>
    },
}