import type { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: ThemeButton;
    isOutlined?: boolean
    type: 'button' | 'submit' | 'reset' | undefined
}

export const Button = (props : ButtonProps) => {
    const {
        className,
        children,
        theme,
        isOutlined = false,
        type = 'button',
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(
                cls.Button,
                { [cls.outline]: isOutlined },
                [className, theme && cls[theme]],
            )}
            type={type}
            {...otherProps}
        >
            {children}
        </button>
    );
};
