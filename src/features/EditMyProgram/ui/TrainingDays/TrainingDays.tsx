import { useTranslation } from 'react-i18next';
import cls from './TrainingDays.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

import type { Day } from '@/entities/Program';
import { DayHeader } from '../DayHeader/DayHeader';
import { DayExercise } from '@/features/EditMyProgram/ui/DayExercise/DayExercise.tsx';

interface TrainingDaysProps {
    programDays: Day[] | undefined

}

export const TrainingDays = (props : TrainingDaysProps) => {
    const { t } = useTranslation();

    const { programDays } = props;

    console.log(programDays);

    return (
        <section className={cls.programSection}>
            <div className={cls.sectionHeader}>
                <h2 className={cls.sectionTitle}>{t('Дни тренировок')}</h2>
                <Button theme={ThemeButton.OUTLINE} type="button">
                    {t('Добавить день')}
                </Button>
            </div>

            <div className={cls.trainingDays}>
                <div className={classNames(cls.trainingDayCard, {}, ['editable'])}>
                    <DayHeader />
                    <DayExercise />
                </div>
            </div>
        </section>
    );
};
