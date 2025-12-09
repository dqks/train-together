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
    const [isOpen, setIsOpen] = useState(false);

    const openHandler = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        if (localStorage.getItem(LOCAL_STORAGE_COLLAPSED_KEY) !== null) {
            setIsOpen(
                JSON.parse(localStorage.getItem(LOCAL_STORAGE_COLLAPSED_KEY) as string),
            );
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_COLLAPSED_KEY, isOpen.toString());
    }, [isOpen]);

    return (
        <div className={classNames(cls.Navbar, { [cls.collapsed]: isOpen }, [className])}>
            {
                !isOpen
                    ? (<ExpandedNavbar openHandler={openHandler} />)
                    : (<CollapsedNavbar openHandler={openHandler} />)
            }
        </div>
    );
};
