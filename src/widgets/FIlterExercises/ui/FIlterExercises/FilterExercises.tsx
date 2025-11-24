import cls from "./FilterExercises.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { FindExercise } from "../../../../features/FindExercise/ui/FindExercise.tsx"
import { AddExercise } from "../../../../features/AddExercise/index.ts";
import { FilterExerciseButton } from "../FilterExerciseButton/FilterExerciseButton.tsx";

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