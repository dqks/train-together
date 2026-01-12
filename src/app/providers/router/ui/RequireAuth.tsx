import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import type { JSX } from 'react';
import { getUserId } from '@/entities/User';
import { PublicRoutePath } from '@/shared/config/routeConfig/publicRouteConfig.tsx';

export const RequireAuth = ({ children } : {children: JSX.Element}) => {
    const userId = useSelector(getUserId);
    const location = useLocation();

    if (!userId) {
        return <Navigate to={PublicRoutePath.login} state={{ from: location }} replace />;
    }

    return children;
};
