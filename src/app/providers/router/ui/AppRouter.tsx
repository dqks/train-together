import { Route, Routes } from 'react-router';
import { publicRouteConfig }
    from "../../../../shared/config/routeConfig/publicRouteConfig.tsx";
import { authRouteConfig }
    from "../../../../shared/config/routeConfig/authRouteConfig.tsx";
import { AppLayout } from "../../../layout/AppLayout";
import { Suspense } from "react";
import { PageLoader } from "../../../../shared/ui/PageLoader/PageLoader.tsx";

export const AppRouter = () => {
    return (
        <Routes>
            {Object.values(publicRouteConfig).map(({element, path}) => (
                <Route
                    key={path}
                    element={
                        <Suspense fallback={<PageLoader/>}>
                            {element}
                        </Suspense>
                    }
                    path={path}
                />
            ))}

            {/* <Route
                path="/app"
                element={
                    <AppLayout/>
                }
            >
                {
                    Object
                        .values(authRouteConfig)
                        .map(({element, path}) => (
                            <Route
                                key={path}
                                element={(<Suspense fallback={<PageLoader/>}>
                                        {element}
                                    </Suspense>)
                                    }
                                path={path}
                            />
                        ))
                }
            </Route> */}
        </Routes>
    )
}