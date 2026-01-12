import type { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import cls from './NavIconItem.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

interface NavIconItemProps {
    className?: string;
    icon: ReactNode
    to: string
}

export const NavIconItem = (props : NavIconItemProps) => {
    const {
        className,
        to,
        icon,
    } = props;

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(to);
    };

    return (
        <div
            onClick={clickHandler}
            className={classNames(cls.NavIconItem, {}, [className])}
        >
            {icon}
        </div>
    );
};
