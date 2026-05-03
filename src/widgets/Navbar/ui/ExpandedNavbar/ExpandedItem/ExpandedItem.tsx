import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ExpandedItem.module.scss';

interface ExpandedItemsProps {
    className?: string;
    title: string;
    icon: React.ReactNode;
    to: string;
}

export const ExpandedItem = (props : ExpandedItemsProps) => {
    const { t } = useTranslation();
    const {
        className, title, icon, to,
    } = props;
    return (
        <NavLink
            to={to}
            className={({ isActive }) => (isActive ? cls.ExpandedItemActive : cls.ExpandedItem)}
        >
            {icon}
            {title}
        </NavLink>
    );
};
