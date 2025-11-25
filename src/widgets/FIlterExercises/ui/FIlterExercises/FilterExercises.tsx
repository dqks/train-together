import cls from "./FilterExercises.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { FindExercise } from "../../../../features/FindExercise/ui/FindExercise"
import { FilterExerciseButton } from "../FilterExerciseButton/FilterExerciseButton";
import { AddExercise } from "../AddExercise/AddExercise";

interface FilterExercisesProps {
    className?: string;
}

export const FilterExercises = ({className}: FilterExercisesProps) => {
    return (
        <div className={classNames(cls.FilterExercises, {}, [className])}>
            <FindExercise />
            <FilterExerciseButton/>
            <AddExercise />
        </div>
    )
}