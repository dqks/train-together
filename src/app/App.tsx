import './styles/index.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from '../shared/lib/classNames/classNames.ts';
import { AppRouter } from './providers/router';
import { userActions } from '@/entities/User';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initUserData());
    }, [dispatch]);
    return (
        <div className={classNames('app', {}, [theme])}>
            <AppRouter />
        </div>
    );
};
