import cls from "./Input.module.scss"
import type { HTMLProps, ReactNode } from "react";
import { classNames } from "../../lib/classNames/classNames.ts";

interface InputProps extends HTMLProps<HTMLInputElement> {
    className?: string;
    otherProps?: ReactNode;
    id: string;
    type: string;
    name: string;
}

export const Input = (props : InputProps) => {
    const {
        className,
        value,
        ...otherProps
    } = props
    return (
        <input

            className={classNames(cls.Input, {}, [className])}
            {...otherProps}
        />
    )
}