import cls from "./FilterExercises.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { FindExercise } from "../../../features/FindExercise/ui/FindExercise.tsx";
import { FilterMuscle } from "../../../features/FilterMuscle";
import { FilterEquipment } from "../../../features/FilterEquipment";
import { AddExercise } from "../../../features/AddExercise";

interface FilterExercisesProps {
    className?: string;
}

export const FilterExercises = ({className}: FilterExercisesProps) => {
    return (
        <div className={classNames(cls.FilterExercises, {}, [className])}>
            <FindExercise />
            <FilterMuscle />
            <FilterEquipment />
            <AddExercise />
        </div>
    )
}