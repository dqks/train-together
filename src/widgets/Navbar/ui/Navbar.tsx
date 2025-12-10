import { useEffect, useState } from 'react';
import { ExpandedNavbar } from './ExpandedNavbar/ExpandedNavbar.tsx';
import { CollapsedNavbar } from './CollapsedNavbar/CollapsedNavbar.tsx';
import cls from './Navbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

interface NavbarProps {
    className?: string;
}

export const LOCAL_STORAGE_COLLAPSED_KEY = 'isCollapsed';

const isCollapsedStorage = localStorage.getItem(LOCAL_STORAGE_COLLAPSED_KEY) as string;

export const Navbar = ({ className } : NavbarProps) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
        if (localStorage.getItem(LOCAL_STORAGE_COLLAPSED_KEY) !== null) {
            return JSON.parse(isCollapsedStorage);
        }
        return false;
    });

    const collapseHandler = () => {
        setIsCollapsed((prev) => !prev);
    };

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_COLLAPSED_KEY, isCollapsed.toString());
    }, [isCollapsed]);

    return (
        <div className={classNames(
            cls.Navbar,
            {
                [cls.collapsed]: isCollapsed,
            },
            [className],
        )}
        >
            {
                isCollapsed
                    ? (<CollapsedNavbar openHandler={collapseHandler} />)
                    : (<ExpandedNavbar openHandler={collapseHandler} />)
            }
        </div>
    );
};
