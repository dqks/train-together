import cls from "./AddMyProgram.module.scss"
import { Button } from "../../../shared/ui/Button/Button.tsx";
import { classNames } from "../../../shared/lib/classNames/classNames.ts";

interface AddMyProgramProps {
    className?: string;
}

export const AddMyProgram = ({className} : AddMyProgramProps) => {
    return (
        <div className={classNames(cls.AddMyProgram, {}, [className])}>
            <Button>+</Button>
        </div>
    )
}