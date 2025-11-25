import cls from "./ProgramDay.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { ExerciseInProgram } from "../../../Exercise";
import ArrowUp from "../../../../shared/assets/icons/arrow-up.svg?react"
import ArrowDown from "../../../../shared/assets/icons/arrow-down.svg?react"
import { useState } from "react";

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
    const [isOpen, setIsOpen] = useState(false);

    const openHandler = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div 
            onClick={openHandler}
            className={classNames(cls.ProgramDay, {[cls.closed]: isOpen}, [className])}
        >
            <div className={cls.dayWrapper}>
                ПН
            </div>
            {
                isOpen && 
                <div className={cls.exercisesWrapper}>
                {/* <ExerciseInProgram className={cls.exercise}/> */}
                    <ExerciseInProgram />
                    <ExerciseInProgram />
                    <ExerciseInProgram />
                    <ExerciseInProgram />
                </div>
            }
            <div>
                {
                isOpen 
                    ? <ArrowUp/>
                    : <ArrowDown className={cls.arrowDown}/>
                }
            </div>
        </div>
    )
}