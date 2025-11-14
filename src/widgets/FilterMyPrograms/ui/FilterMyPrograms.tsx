import cls from "./FilterMyPrograms.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { SearchMyProgram } from "../../../features/SearchMyProgram/index.ts";
import { AddMyProgram } from "../../../features/AddMyProgram/index.ts";

interface FilterMyProgramProps {
    className?: string;
}

export const FilterMyProgram = ({className} : FilterMyProgramProps) => {
    return (
        <div className={classNames(cls.FilterMyProgram, {}, [className])}>
            <SearchMyProgram />
            <AddMyProgram />
        </div>
    )
}