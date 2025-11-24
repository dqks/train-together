import cls from "./ProgramDay.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { ExerciseInProgram } from "../../../Exercise";
import ArrowUp from "../../../../shared/assets/icons/arrow-up.svg?react"

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

export const ProgramDay = ({className} : ProgramDayProps) => {
    return (
        <div className={classNames(cls.ProgramDay, {}, [className])}>
            <div className={cls.dayWrapper}>
                ПН
            </div>
            <div className={cls.exercisesWrapper}>
                <ExerciseInProgram className={cls.exercise}/>
                <ExerciseInProgram />
                <ExerciseInProgram />
                <ExerciseInProgram />
            </div>
            <div>
                <ArrowUp/>
            </div>
        </div>
    )
}