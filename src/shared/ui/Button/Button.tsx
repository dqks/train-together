import type { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';

export enum ThemeButton {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    OUTLINE = 'outline',
    GHOST = 'ghost',
}

export enum SizeButton {
    SMALL = 'sm',
    MEDIUM = '',
    LARGE = 'lg',
}

type ButtonType = 'button' | 'submit' | 'reset'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: ThemeButton;
    type: ButtonType
    disabled?: boolean
    isIcon?: boolean
    size?: SizeButton
}

export const Button = (props : ButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.PRIMARY,
        type = 'button',
        disabled = false,
        isIcon = false,
        size = SizeButton.MEDIUM,
        ...otherProps
    } = props;

    const mods = {
        [cls.disabled]: disabled,
        [cls.icon]: isIcon,
    };

    const additional = [className, theme && cls[theme], cls[size]];

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
