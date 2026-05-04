import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import cls from './ExercisesControl.module.scss';
import { SearchInput } from '@/shared/ui/SearchInput/SearchInput.tsx';
import { EquipmentFilter, MuscleFilter } from '@/features/FilterExercises';

export const ExercisesControl = () => {
    const { t } = useTranslation();

    return (
        <div>
            <div className={classNames(cls.ExercisesControl, {}, [])}>
                <SearchInput placeholder={t('Поиск по названию...')} />
                <MuscleFilter />
                <EquipmentFilter />
            </div>
            <span className={cls.filteredAmount}>
                {t('Показано: ')}
                {' '}
                <strong>4</strong>
                {' '}
                {t('упражнений')}
            </span>
        </div>

    );
};
