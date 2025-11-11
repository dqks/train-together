import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { publicRouteConfig } from "../../../../shared/config/routeConfig/publicRouteConfig.tsx";
import { authRouteConfig } from "../../../../shared/config/routeConfig/authRouteConfig.tsx";
import { AppLayout } from "../../../layout/AppLayout";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                {Object.values(publicRouteConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        element={element}
                        path={path}
                    />
                ))}

                <Route
                    path="/app"
                    element={
                        <AppLayout/>
                    }
                >
                    {
                        Object.values(authRouteConfig).map(({element, path}) => (
                            <Route
                                key={path}
                                element={element}
                                path={path}
                            />
                        ))
                    }
                </Route>
            </Routes>
        </Suspense>
    )
}