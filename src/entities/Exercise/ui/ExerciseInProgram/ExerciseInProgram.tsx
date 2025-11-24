import cls from "./ExerciseInProgram.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import picture from "../../../../shared/assets/images/picture.png"

interface ExerciseInProgramProps {
    className?: string;
}

export const ExerciseInProgram = ({className} : ExerciseInProgramProps) => {
    return (
        <div className={classNames(cls.ExerciseInProgram, {}, [className])}>
            <div className={cls.imageWrapper}>
                <img src={picture} alt={"Изображение"} className={cls.image}/>
            </div>
            <div>
                <p>Жим штанги лежа</p>
                <p>3x12</p>
            </div>
        </div>
    )
}