import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Days.module.scss';

interface DaysProps {
    className?: string;
}

export const Days = ({ className } : DaysProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Days, {}, [className])}>
            <div className={cls.trainingDayCard}>
                <div className={cls.dayHeader}>
                    <div className={cls.dayBadge}>
                        <span className={cls.dayNumber}>1</span>
                        <span className={cls.dayName}>{t('Понедельник')}</span>
                    </div>
                </div>
                <div className={cls.dayExercises}>
                    <div className={cls.exerciseRow}>
                        <div className={cls.exerciseNumber}>1</div>
                        <div className={cls.exerciseDetails}>
                            <span className={cls.exerciseName}>Жим лежа</span>
                            <span className={cls.exerciseSets}>4 х 10</span>
                        </div>
                        <div className={cls.exerciseMuscleTag}>Грудные</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
