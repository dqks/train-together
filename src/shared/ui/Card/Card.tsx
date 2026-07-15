import type { HTMLProps, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLProps<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

export const Card = ({ className, children, ...props } : CardProps) => (
    <div className={classNames(cls.Card, {}, [className])} {...props}>
        {children}
    </div>
);
