import cls from "./ProgramsList.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { ProgramCard } from "../../../entities/TrainingProgram";


interface ProgramsListProps {
    className?: string;
}

export const ProgramsList = ({className}: ProgramsListProps) => {
    return (
        <div className={classNames(cls.ProgramsList, {}, [className])}>
            <ProgramCard deleteCreator={true}/>
            <ProgramCard deleteCreator={true}/>
            <ProgramCard deleteCreator={true}/>
            <ProgramCard deleteCreator={true}/>
            <ProgramCard deleteCreator={true}/>
            <ProgramCard deleteCreator={true}/>
        </div>
    )
}