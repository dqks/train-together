import cls from "./FindExercise.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Input } from "../../../shared/ui/Input/Input.tsx";

interface FindExerciseProps {
    className?: string;
}

export const FindExercise = ({className}: FindExerciseProps) => {
    return (
        <div className={classNames(cls.FindExercise, {}, [className])}>
            <Input id={"exerciseName"} type={"text"} name={"exerciseName"}/>
        </div>
    )
}