import cls from "./SearchMyProgram.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Input } from "../../../shared/ui/Input/Input.tsx";

interface SearchMyProgramProps {
    className?: string;
}

export const SearchMyProgram = ({className} : SearchMyProgramProps) => {
    return (
        <div className={classNames(cls.SearchMyProgram, {}, [className])}>
            <Input type="search" id="programName" name="programName"/>
        </div>
    )
}