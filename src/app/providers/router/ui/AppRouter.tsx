import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { routeConfig } from "../../../../shared/config/routeConfig/routeConfig.tsx";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        element={element}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}