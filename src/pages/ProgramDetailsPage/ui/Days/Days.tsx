import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Days.module.scss';
import type { Day } from '@/entities/Program';

interface DaysProps {
    className?: string;
    days: Day[] | undefined
}

export const Days = ({ className, days } : DaysProps) => {
    const { t } = useTranslation();

    const trainingDayCard = days?.map(((day, index) => (
        <div className={cls.trainingDayCard} key={day.id}>
            <div className={cls.dayHeader}>
                <div className={cls.dayBadge}>
                    <span className={cls.dayNumber}>{index + 1}</span>
                    <span className={cls.dayName}>{t(day.day.name)}</span>
                </div>
            </div>
            {
                day.exercises.map((ex, index) => (
                    <div className={cls.dayExercises} key={ex.id}>
                        <div className={cls.exerciseRow}>
                            <div className={cls.exerciseNumber}>{index + 1}</div>
                            <div className={cls.exerciseDetails}>
                                <span className={cls.exerciseName}>{ex.exercise.name}</span>
                                <span className={cls.exerciseSets}>
                                    {ex.sets}
                                    {t(' x ')}
                                    {ex.reps}
                                </span>
                            </div>
                            <div className={cls.exerciseMuscleTag}>{ex?.exercise?.primaryMuscle?.name}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )));

    return (
        <div className={classNames(cls.Days, {}, [className])}>
            {trainingDayCard}
        </div>
    );
};
