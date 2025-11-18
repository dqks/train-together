import cls from "./FilterPrograms.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { SearchProgram } from "../../../features/SearchProgram";
import { ProgramCategory } from "../../../features/ProgramCategory";

interface FilterProgramsProps {
    className?: string;
}

export const FilterPrograms = ({className} : FilterProgramsProps) => {
    return (
        <div className={classNames(cls.FilterPrograms, {}, [className])}>
            <SearchProgram />
            <ProgramCategory />
        </div>
    )
}