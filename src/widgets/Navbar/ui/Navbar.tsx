import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ExpandedNavbar } from './ExpandedNavbar/ExpandedNavbar.tsx';
import { CollapsedNavbar } from './CollapsedNavbar/CollapsedNavbar.tsx';
import cls from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { LOCAL_STORAGE_COLLAPSED_KEY } from '@/shared/const/isCollapsedKey.ts';
import { logout } from '@/entities/User';

const getIsCollapsedStorage = () => {
    if (localStorage.getItem(LOCAL_STORAGE_COLLAPSED_KEY) !== null) {
        const isCollapsedStorage = localStorage.getItem(LOCAL_STORAGE_COLLAPSED_KEY) as string;
        return JSON.parse(isCollapsedStorage);
    }
    return false;
};

export const Navbar = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(getIsCollapsedStorage);
    const dispatch = useDispatch();

    const collapseHandler = useCallback(() => {
        setIsCollapsed((prev) => !prev);
    }, []);

    const onLogoutClick = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_COLLAPSED_KEY, isCollapsed.toString());
    }, [isCollapsed]);

    return (
        <div className={classNames(
            cls.Navbar,
            {
                [cls.collapsed]: isCollapsed,
            },
            [],
        )}
        >
            {
                isCollapsed
                    ? (<CollapsedNavbar openHandler={collapseHandler} logoutHandler={onLogoutClick} />)
                    : (<ExpandedNavbar openHandler={collapseHandler} logoutHandler={onLogoutClick} />)
            }
        </div>
    );
};
