import { useTranslation } from 'react-i18next';
import cls from './ExerciseRow.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import Cross from '@/shared/assets/icons/cross.svg?react';
import ToDetails from '@/shared/assets/icons/to-details.svg?react';
import Burger from '@/shared/assets/icons/burger.svg?react';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

interface ExerciseRowProps {
}

export const ExerciseRow = ({} : ExerciseRowProps) => {
    const { t } = useTranslation();
    return (
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
    );
};
