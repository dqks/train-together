import { useTranslation } from 'react-i18next';
import cls from './DayHeader.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import Show from '@/shared/assets/icons/show.svg?react';
import TrashCan from '@/shared/assets/icons/trash-can.svg?react';

interface DayHeaderProps {
    dayNumber: number;
    dayName: string;
    onDeleteDay: (dayIndex: number) => void
}

export const DayHeader = (props : DayHeaderProps) => {
    const { t } = useTranslation();
    const { dayNumber, dayName, onDeleteDay } = props;
    return (
        <div className={cls.dayHeader}>
            <div className={cls.dayHeaderLeft}>
                {/* <div className={cls.dayDragHandle} aria-hidden="true"> */}
                {/*    <Burger /> */}
                {/* </div> */}
                <div className={cls.dayBadge}>
                    <span className={cls.dayNumber}>{dayNumber}</span>
                    <input
                        className={cls.dayNameInput}
                        type="text"
                        defaultValue={t(dayName)}
                        placeholder={t('Название дня')}
                        disabled
                    />
                </div>
            </div>
            <div className={cls.dayHeaderActions}>
                <Button theme={ThemeButton.GHOST} type="button">
                    <Show />
                </Button>
                <Button onClick={() => onDeleteDay(dayNumber - 1)} theme={ThemeButton.GHOST} type="button">
                    <TrashCan />
                </Button>
            </div>
        </div>
    );
};
