import { useTranslation } from 'react-i18next';
import cls from './TrainingDays.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import Show from '@/shared/assets/icons/show.svg?react';
import TrashCan from '@/shared/assets/icons/trash-can.svg?react';
import Cross from '@/shared/assets/icons/cross.svg?react';
import ToDetails from '@/shared/assets/icons/to-details.svg?react';
import Burger from '@/shared/assets/icons/burger.svg?react';

interface TrainingDaysProps {
}

export const TrainingDays = ({} : TrainingDaysProps) => {
    const { t } = useTranslation();
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
                    <div className={cls.dayExercises}>
                        <div className={classNames(cls.exerciseRow, {}, ['editable'])}>
                            <div className={cls.exerciseDragHandle} aria-hidden="true">
                                <Burger />
                            </div>
                            <div className={cls.exerciseNumber}>1</div>
                            <div className={cls.exerciseDetails}>
                                <span className={cls.exerciseSelectBlockText}>
                                    {t('Жим лёжа')}
                                </span>
                                <div className={cls.exerciseParams}>
                                    <input
                                        className={cls.paramInput}
                                        type="number"
                                        defaultValue={5}
                                        placeholder={t('Повторения')}
                                    />
                                    <span>{t('x')}</span>
                                    <input
                                        className={cls.paramInput}
                                        type="number"
                                        defaultValue={4}
                                        placeholder={t('Подходы')}
                                    />
                                </div>
                            </div>
                            <div className={cls.exerciseMuscleTag}>{t('Грудные')}</div>
                            <div className={cls.exerciseActions}>
                                <Button theme={ThemeButton.GHOST} type="button">
                                    <ToDetails className={cls.toDetailsIcon} />
                                </Button>
                                <Button theme={ThemeButton.GHOST} type="button">
                                    <Cross className={cls.crossIcon} />
                                </Button>
                            </div>
                        </div>

                        <Button
                            theme={ThemeButton.OUTLINE}
                            type="button"
                            className={cls.addExerciseBtn}
                        >
                            {t('+ Добавить упражнение')}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
