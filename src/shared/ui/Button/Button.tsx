import cls from "./Button.module.scss"
import type { ButtonHTMLAttributes } from "react";
import { classNames } from "../../lib/classNames/classNames.ts";

export enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
    theme?: ThemeButton;
    isOutlined?: boolean
}

export const Button = (props : ButtonProps) => {
    const {
        className,
        children,
        theme,
        isOutlined = false,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(cls.Button,
                {[cls.outline] : isOutlined},
                [className, theme && cls[theme]])
            }
            {...otherProps}
        >
            {children}
        </button>
    )
}