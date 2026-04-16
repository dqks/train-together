import './styles/index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { classNames } from '../shared/lib/classNames/classNames.ts';
import { AppRouter } from './providers/router';
import { getInited, me } from '@/entities/User';

export const App = () => {
    const dispatch = useDispatch();
    const inited = useSelector(getInited);

    useEffect(() => {
        dispatch(me());
    }, [dispatch]);
    return (
        <div className={classNames('app', {}, [])}>
            {inited && <AppRouter />}
        </div>
    );
};
