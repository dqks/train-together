import type { ReactNode, SelectHTMLAttributes } from 'react';
import cls from './Select.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
    children: ReactNode
}

export const Select = ({ className, children }: SelectProps) => (
    <select
        className={classNames(cls.Select, {}, [className])}
    >
        {children}
    </select>
);
