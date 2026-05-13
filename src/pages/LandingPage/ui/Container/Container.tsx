import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Container.module.scss';

interface ContainerProps {
    className?: string;
    children?: React.ReactNode;
}

export const Container = ({ className, children } : ContainerProps) => (
    <div className={classNames(cls.Container, {}, [className])}>
        {children}
    </div>
);
