import { classNames } from '@/shared/lib/classNames/classNames.ts';
import cls from './ExercisesControl.module.scss';
import { FilterExerciseButton } from '../FilterExerciseButton/FilterExerciseButton';
import { AddExerciseButton } from '../AddExerciseButton/AddExerciseButton';
import { Input } from '@/shared/ui/Input/Input.tsx';

interface FilterExercisesProps {
    className?: string;
}

export const ExercisesControl = ({ className }: FilterExercisesProps) => (
    <div className={classNames(cls.FilterExercises, {}, [className])}>
        <Input id="exerciseName" type="search" name="exerciseName" />
        <FilterExerciseButton />
        <AddExerciseButton />
    </div>
);
