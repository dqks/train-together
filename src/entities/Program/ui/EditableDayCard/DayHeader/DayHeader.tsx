import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import cls from './DayHeader.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import Show from '@/shared/assets/icons/show.svg?react';
import TrashCan from '@/shared/assets/icons/trash-can.svg?react';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Select } from '@/shared/ui/Select/Select.tsx';
import type { DayOfWeek } from '@/entities/Program/model/types/programSchema.ts';
import {classNames}  from '@/shared/lib/classNames/classNames';

interface DayHeaderProps {
    dayNumber: number;
    dayName: string;
    dayId: number | undefined;
    daysOfWeek: DayOfWeek[] | null
    selectedDayOfWeekId: number | null
    onDeleteDay: (dayIndex: number) => void
    onChangeDayName: (name: string, dayId: number) => void
    onChangeDayOfWeek: (dayOfWeekId: number, dayId: number) => void
}

const shortDayNames: Record<string, string> = {
    Понедельник: 'ПН',
    Вторник: 'ВТ',
    Среда: 'СР',
    Четверг: 'ЧТ',
    Пятница: 'ПТ',
    Суббота: 'СБ',
    Воскресенье: 'ВС',
};

export const DayHeader = (props : DayHeaderProps) => {
    const { t } = useTranslation();
    const {
        dayNumber,
        dayName,
        dayId,
        daysOfWeek,
        selectedDayOfWeekId,
        onDeleteDay,
        onChangeDayName,
        onChangeDayOfWeek,
    } = props;
    const changeNameHandler = useCallback((name: string) => {
        if (dayId) {
            onChangeDayName(name, dayId);
        }
    }, [dayId, onChangeDayName]);

    const deleteDayHandler = useCallback(() => {
        onDeleteDay(dayNumber - 1)
    }, [dayNumber, onDeleteDay])

    const changeDayOfWeekHandler = useCallback((id: string) => {
        if (dayId) {
            onChangeDayOfWeek(Number(id) , dayId)
        }
    }, [dayNumber, onDeleteDay])

    return (
        <div className={cls.dayHeader}>
            <div className={cls.dayHeaderLeft}>
                {/* <div className={cls.dayDragHandle} aria-hidden="true"> */}
                {/*    <Burger /> */}
                {/* </div> */}
                <div className={cls.dayBadge}>
                    <Select 
                        value={String(selectedDayOfWeekId)} 
                        theme="ghost"
                        className={cls.dayOfWeek}
                        onChange={changeDayOfWeekHandler}
                    >
                        {daysOfWeek?.map((day) => (
                            <option key={day.id} value={day.id}>{shortDayNames[day.name]}</option>
                        ))}
                    </Select>
                    <Input
                        onChange={changeNameHandler}
                        type="text"
                        theme="ghost"
                        value={dayName}
                        placeholder={t('Название дня')}
                    />
                </div>
            </div>
            <div className={cls.dayHeaderActions}>
                <Button theme={ThemeButton.GHOST} type="button">
                    <Show />
                </Button>
                <Button onClick={deleteDayHandler} theme={ThemeButton.GHOST} type="button">
                    <TrashCan />
                </Button>
            </div>
        </div>
    );
};
