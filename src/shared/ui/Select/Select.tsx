import cls from "./Select.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import type { ReactNode, SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
    children: ReactNode
}

export const Select = ({className, children}: SelectProps) => {

    return (
        <select
            className={classNames(cls.Select, {}, [className])}
        >
            {children}
        </select>
    )
}