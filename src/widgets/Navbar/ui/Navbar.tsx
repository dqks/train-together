import { useEffect, useState } from 'react';
import { ExpandedNavbar } from './ExpandedNavbar/ExpandedNavbar.tsx';
import { CollapsedNavbar } from './CollapsedNavbar/CollapsedNavbar.tsx';
import cls from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

interface NavbarProps {
    className?: string;
}

export const LOCAL_STORAGE_COLLAPSED_KEY = 'isCollapsed';

export const Navbar = ({ className } : NavbarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const openHandler = () => {
        setIsCollapsed((prev) => !prev);
    };

    useEffect(() => {
        if (localStorage.getItem(LOCAL_STORAGE_COLLAPSED_KEY) !== null) {
            setIsCollapsed(
                JSON.parse(localStorage.getItem(LOCAL_STORAGE_COLLAPSED_KEY) as string),
            );
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_COLLAPSED_KEY, isCollapsed.toString());
    }, [isCollapsed]);

    return (
        <div className={classNames(cls.Navbar, { [cls.collapsed]: isCollapsed }, [className])}>
            {
                isCollapsed
                    ? (<CollapsedNavbar openHandler={openHandler} />)
                    : (<ExpandedNavbar openHandler={openHandler} />)
            }
        </div>
    );
};
