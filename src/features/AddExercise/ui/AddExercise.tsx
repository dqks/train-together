import cls from "./AddExercise.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Button } from "../../../shared/ui/Button/Button.tsx";

interface AddExerciseProps {
    className?: string;
}

export const AddExercise = ({className} : AddExerciseProps) => {
    return (
        <div className={classNames(cls.AddExercise, {}, [className])}>
            <Button>+</Button>
        </div>
    )
}