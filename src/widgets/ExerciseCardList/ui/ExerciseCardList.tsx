import cls from "./ExerciseCardList.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { ExerciseCard } from "../../../entities/Exercise";

interface ExerciseCardListProps {
    className?: string;
}

export const ExerciseCardList = ({className} : ExerciseCardListProps) => {
    return (
        <div className={classNames(cls.ExerciseCardList, {}, [className])}>
            <ExerciseCard className={cls.exerciseCard} />
            <ExerciseCard className={cls.exerciseCard}/>
            <ExerciseCard className={cls.exerciseCard}/>
            <ExerciseCard className={cls.exerciseCard}/>
            <ExerciseCard className={cls.exerciseCard}/>
            <ExerciseCard className={cls.exerciseCard}/>
            <ExerciseCard className={cls.exerciseCard}/>
            <ExerciseCard className={cls.exerciseCard}/>
        </div>
    )
}