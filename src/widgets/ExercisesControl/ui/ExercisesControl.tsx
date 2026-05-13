import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router';
import { useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import cls from './ExercisesControl.module.scss';
import { SearchInput } from '@/shared/ui/SearchInput/SearchInput.tsx';
import { EquipmentFilter, MuscleFilter } from '@/features/FilterExercises';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { fetchExerciseCards } from '@/entities/Exercise';
import type { Filters } from '@/entities/Exercise/model/services/fetchExerciseCards/fetchExerciseCards.ts';

interface ExercisesControlProps {
    exerciseCount: number | undefined;
}

export const ExercisesControl = ({ exerciseCount } : ExercisesControlProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [equipmentId, setEquipmentId] = useState<string | undefined>(
        searchParams.get('equipmentId') || undefined,
    );
    const [primaryMuscleId, setPrimaryMuscleId] = useState<string | undefined>(
        searchParams.get('primaryMuscles') || undefined,
    );

    const onReset = () => {
        setSearchParams({});
        setEquipmentId(undefined);
        setPrimaryMuscleId(undefined);
        dispatch(fetchExerciseCards());
    };

    const onApplyFilters = useCallback(() => {
        const filterObject : Filters = {};

        if (primaryMuscleId) {
            filterObject.primaryMuscles = primaryMuscleId;
        }

        if (equipmentId) {
            filterObject.equipmentId = equipmentId;
        }

        // @ts-ignore
        setSearchParams(filterObject);
        dispatch(fetchExerciseCards(filterObject));
    }, [equipmentId, primaryMuscleId]);

    return (
        <div>
            <div className={classNames(cls.ExercisesControl, {}, [])}>
                <SearchInput placeholder={t('Поиск по названию...')} />
                <MuscleFilter
                    onApplyFilters={onApplyFilters}
                    primaryMuscleId={primaryMuscleId}
                    setPrimaryMuscleId={setPrimaryMuscleId}

                />
                <EquipmentFilter
                    onApplyFilters={onApplyFilters}
                    equipmentId={equipmentId}
                    setEquipmentId={setEquipmentId}
                />
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
