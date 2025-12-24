import './styles/index.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { classNames } from '../shared/lib/classNames/classNames.ts';
import { AppRouter } from './providers/router';
import { userActions } from '@/entities/User';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initUserData());
    }, [dispatch]);
    return (
        <div className={classNames('app', {}, [])}>
            <AppRouter />
        </div>
    );
};
