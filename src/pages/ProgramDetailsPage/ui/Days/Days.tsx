import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Days.module.scss';
import type { Day } from '@/entities/Program';
import { DayCard } from '@/entities/Program';

interface DaysProps {
    className?: string;
    days: Day[] | undefined
}

export const Days = ({ className, days } : DaysProps) => {
    const trainingDayCard = days?.map(((day, index) => <DayCard day={day} dayNumber={index + 1} key={index}/>));
    return (
        <div className={classNames(cls.Days, {}, [className])}>
            {trainingDayCard}
        </div>
    );
};
