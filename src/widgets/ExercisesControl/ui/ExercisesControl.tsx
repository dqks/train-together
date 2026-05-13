import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import cls from './ExercisesControl.module.scss';
import { SearchInput } from '@/shared/ui/SearchInput/SearchInput.tsx';
import { EquipmentFilter, MuscleFilter } from '@/features/FilterExercises';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { fetchExerciseCards } from '@/entities/Exercise';

interface ExercisesControlProps {
    exerciseCount: number | undefined;
}

export const ExercisesControl = ({ exerciseCount } : ExercisesControlProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [_, setSearchParams] = useSearchParams();

    const onReset = () => {
        setSearchParams({});
        dispatch(fetchExerciseCards());
    };

    return (
        <div>
            <div className={classNames(cls.ExercisesControl, {}, [])}>
                <SearchInput placeholder={t('Поиск по названию...')} />
                <MuscleFilter />
                <EquipmentFilter />
            </div>
            <div className={cls.controlFooter}>
                <Button
                    onClick={onReset}
                    type="button"
                    theme={ThemeButton.OUTLINE}
                >
                    {t('Сбросить фильтры')}
                </Button>
                <span className={cls.filteredAmount}>
                    {t('Показано: ')}
                    {' '}
                    <strong>{exerciseCount || 0}</strong>
                    {' '}
                    {t('упражнений')}
                </span>
            </div>

        </div>

    );
};
