import cls from "./ProgramDay.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { ExerciseInProgram } from "../../../Exercise";
import ArrowUp from "../../../../shared/assets/icons/arrow-up.svg?react"
import ArrowDown from "../../../../shared/assets/icons/arrow-down.svg?react"
import { useState } from "react";
import { useTranslation } from "react-i18next";

export enum Days {
    MONDAY = "ПН",
    TUESDAY = "ВТ",
    WEDNESDAY = "СР",
    THURSDAY = "ЧТ",
    FRIDAY = "ПТ",
    SUNDAY = "СБ",
    SATURDAY = "ВС",
}

interface ProgramDayProps {
    className?: string;
    day?: Days;
}

export const ProgramDay = ({
    className,
    day
} : ProgramDayProps) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const openHandler = () => {
        setIsOpen(prev => !prev)
    }

    const handleChildClick = (event: any) => {
        event.stopPropagation(); // Prevent the click from bubbling up to the parent
        console.log('Child clicked!');
    };

    return (
        <div 
            onClick={openHandler}
            className={classNames(cls.ProgramDay, {[cls.closed]: !isOpen}, [className])}
        >
            <div 
                onClick={handleChildClick} 
                className={cls.dayWrapper}
            >
                {t(day as string)}
            </div>
            {
                isOpen && 
                <div 
                    onClick={handleChildClick} 
                    className={cls.exercisesWrapper}
                >
                    <ExerciseInProgram />
                    <ExerciseInProgram />
                    <ExerciseInProgram />
                    <ExerciseInProgram />
                </div>
            }
            <div className={cls.arrowWrapper}>
                {
                isOpen 
                    ? <ArrowUp />
                    : <ArrowDown />
                }
            </div>
        </div>
    )
}