import cls from "./Chip.module.scss"
import { classNames } from "../../lib/classNames/classNames.ts";
import { useState } from "react";
import Cross from "../../../shared/assets/icons/cross.svg?react"

interface ChipProps {
    className?: string;
    text: string
}

export const Chip = ({className, text}: ChipProps) => {
    const [isSelected, setIsSelected] = useState(false);

    const onToggle = () => {
        setIsSelected((prev) => !prev);
    }

    return (
        <div
            className={classNames(cls.Chip, {[cls.selected]: isSelected}, [className])}
            onClick={onToggle}
        >
            <span className={cls.spanText}>
                {text}
                {
                    isSelected && (
                        <>
                            <Cross width={20} height={20}/>
                        </>
                    )
                }
            </span>
        </div>
    )
}