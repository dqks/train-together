import cls from './ExerciseInProgram.module.scss';
import { classNames } from '../../../../shared/lib/classNames/classNames.ts';
import Picture from '../../../../shared/assets/icons/picture.svg?react';

interface ExerciseInProgramProps {
    className?: string;
}

export const ExerciseInProgram = ({ className } : ExerciseInProgramProps) => (
    <div className={classNames(cls.ExerciseInProgram, {}, [className])}>
        <div className={cls.imageWrapper}>
            <Picture />
        </div>
        <div>
            <p>Жим штанги лежа</p>
            <p>3x12</p>
        </div>
    </div>
);
