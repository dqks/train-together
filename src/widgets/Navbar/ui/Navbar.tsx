import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ExpandedNavbar } from './ExpandedNavbar/ExpandedNavbar.tsx';
import cls from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { logout } from '@/entities/User';

export const Navbar = () => {
    const dispatch = useDispatch();

    const onLogoutClick = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    return (
        <div className={classNames(
            cls.Navbar,
            {
            },
            [],
        )}
        >
            <ExpandedNavbar logoutHandler={onLogoutClick} />
        </div>
    );
};
