import cls from "./ProgramsList.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { ProgramCard } from "../../../entities/Program";


interface ProgramsListProps {
    className?: string;
}

export const ProgramsList = ({className}: ProgramsListProps) => {
    return (
        <div className={classNames(cls.ProgramsList, {}, [className])}>
            <ProgramCard className={cls.program}/>
            <ProgramCard className={cls.program}/>
            <ProgramCard className={cls.program}/>
            <ProgramCard className={cls.program}/>
            <ProgramCard className={cls.program}/>
            <ProgramCard className={cls.program}/>
        </div>
    )
}