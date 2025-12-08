import type { ReactNode } from 'react';
import cls from './TooltipElement.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';

interface TooltipElementProps {
    className?: string;
    children: ReactNode;
    tooltipText: string;
}

export const TooltipElement = ({
    className,
    children,
    tooltipText,
} : TooltipElementProps) => (
    <div className={classNames(cls.TooltipElement, {}, [className])}>
        <div className={cls.content}>
            {children}
        </div>
        <span className={cls.tooltipText}>{tooltipText}</span>
    </div>
);
