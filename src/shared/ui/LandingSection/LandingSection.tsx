import type { ReactNode } from 'react';
import cls from './LandingSection.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';

interface LandingSectionProps {
    className?: string;
    title: string;
    description?: string;
    children: ReactNode;
}

export const LandingSection = ({
    className,
    title,
    description,
    children,
} : LandingSectionProps) => (
    <div className={classNames(cls.LandingSection, {}, [className])}>
        <h1 className={cls.title}>{title}</h1>
        <p className={cls.description}>{description}</p>
        {children}
    </div>
);
