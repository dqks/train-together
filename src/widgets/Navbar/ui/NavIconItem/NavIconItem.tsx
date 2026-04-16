import type { ReactNode } from 'react';
import cls from './NavIconItem.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';

interface NavIconItemProps {
    className?: string;
    icon: ReactNode
    onClick?: () => void
    to: string
}

export const NavIconItem = (props : NavIconItemProps) => {
    const {
        className,
        onClick,
        to,
        icon,
    } = props;

    return (
        <AppLink
            to={to}
            onClick={onClick}
            className={classNames(cls.NavIconItem, {}, [className])}
        >
            {icon}
        </AppLink>
    );
};
