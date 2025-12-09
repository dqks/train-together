import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { FindExercise } from '@/features/FindExercise/ui/FindExercise.tsx';
import cls from './FilterExercises.module.scss';
import { FilterExerciseButton } from '../FilterExerciseButton/FilterExerciseButton';
import { AddExerciseButton } from '../AddExerciseButton/AddExerciseButton';

interface FilterExercisesProps {
    className?: string;
}

export const FilterExercises = ({ className }: FilterExercisesProps) => (
    <div className={classNames(cls.FilterExercises, {}, [className])}>
        <FindExercise />
        <FilterExerciseButton />
        <AddExerciseButton />
    </div>
);
