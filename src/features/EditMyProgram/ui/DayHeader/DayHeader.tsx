import { useTranslation } from 'react-i18next';
import cls from './DayHeader.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import Burger from '@/shared/assets/icons/burger.svg?react';
import Show from '@/shared/assets/icons/show.svg?react';
import TrashCan from '@/shared/assets/icons/trash-can.svg?react';

interface DayHeaderProps {
}

export const DayHeader = ({} : DayHeaderProps) => {
    const { t } = useTranslation();
    return (
        <div className={cls.dayHeader}>
            <div className={cls.dayHeaderLeft}>
                <div className={cls.dayDragHandle} aria-hidden="true">
                    <Burger />
                </div>
                <div className={cls.dayBadge}>
                    <span className={cls.dayNumber}>1</span>
                    <input
                        className={cls.dayNameInput}
                        type="text"
                        defaultValue={t('Понедельник')}
                        placeholder={t('Название дня')}
                    />
                </div>
            </div>
            <div className={cls.dayHeaderActions}>
                <Button theme={ThemeButton.GHOST} type="button">
                    <Show />
                </Button>
                <Button theme={ThemeButton.GHOST} type="button">
                    <TrashCan />
                </Button>
            </div>
        </div>
    );
};
