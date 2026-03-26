import { Route, Routes } from 'react-router';
import { Suspense } from 'react';
import { publicRouteConfig }
    from '@/shared/config/routeConfig/publicRouteConfig.tsx';
import { authRouteConfig }
    from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { AppLayout } from '@/app/layout/AppLayout';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth.tsx';

export const AppRouter = () => (
    <Routes>
        {Object
            .values(publicRouteConfig)
            .map(({ element, path }) => (
                <Route
                    path={path}
                    key={path}
                    element={(
                        <Suspense
                            key={path}
                            fallback={<PageLoader />}
                        >
                            {element}
                        </Suspense>
                    )}
                />
            ))}

        <Route
            path="/app"
            element={<AppLayout />}
        >
            {
                Object
                    .values(authRouteConfig)
                    .map(({ element, path }) => (
                        <Route
                            key={path}
                            element={(
                                <RequireAuth>
                                    <Suspense
                                        key={path}
                                        fallback={<PageLoader />}
                                    >
                                        {element}
                                    </Suspense>
                                </RequireAuth>
                            )}
                            path={path}
                        />
                    ))
            }
        </Route>
    </Routes>
);
