import { NavLink } from 'react-router';
import React from 'react';
import cls from './ExpandedItem.module.scss';

interface ExpandedItemsProps {
    title: string;
    icon: React.ReactNode;
    to: string | object;
}

export const ExpandedItem = (props : ExpandedItemsProps) => {
    const {
        title, icon, to,
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
