import type { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';

export enum ThemeButton {
    CLEAR = 'clear',
}

type ButtonType = 'button' | 'submit' | 'reset' | undefined

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: ThemeButton;
    isOutlined?: boolean
    type: ButtonType
    disabled?: boolean
}

export const Button = (props : ButtonProps) => {
    const {
        className,
        children,
        theme,
        isOutlined = false,
        type = 'button',
        disabled = false,
        ...otherProps
    } = props;

    const mods = {
        [cls.outline]: isOutlined,
        [cls.disabled]: disabled,
    };

    const additional = [className, theme && cls[theme]];

    return (
        <button
            className={classNames(
                cls.Button,
                mods,
                additional,
            )}
            type={type}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
