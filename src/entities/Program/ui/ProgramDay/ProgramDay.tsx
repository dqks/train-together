import cls from "./ProgramDay.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { ExerciseInProgram } from "../../../Exercise";
import ArrowUp from "../../../../shared/assets/icons/arrow-up.svg?react"
import ArrowDown from "../../../../shared/assets/icons/arrow-down.svg?react"
import { useEffect, useRef, useState } from "react";
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
    const divRef = useRef<HTMLDivElement>(null);
    const openHandler = () => {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        if (isOpen) {
            divRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',   
                inline: 'center'  
            });
        }
    }, [isOpen])    

    const handleChildClick = (event: any) => {
        event.stopPropagation();
    };

    return (
        <div
            ref={divRef} 
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