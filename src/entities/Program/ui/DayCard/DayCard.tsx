import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './DayCard.module.scss';
import type { Day } from '@/entities/Program';

interface DayCardProps {
    className?: string;
    day: Day | undefined
    dayNumber: number
}

export const DayCard = ({ className, day, dayNumber } : DayCardProps) => {
    const { t } = useTranslation();

    if (!day) {
        return null
    }

    return (
        <div className={classNames(cls.trainingDayCard, {}, [className])} >
            <div className={cls.dayHeader}>
                <div className={cls.dayBadge}>
                    <span className={cls.dayNumber}>{dayNumber}</span>
                    <span className={cls.dayName}>{t(day.name)}</span>
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
    );
};
