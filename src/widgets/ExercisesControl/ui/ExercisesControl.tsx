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
import { useDebounce } from '@/shared/lib/useDebounce/useDebounce.ts';
import { makeFilterObject } from '../lib/makeFilterObject.ts';

interface ExercisesControlProps {
    exerciseCount: number | undefined;
}

// For filters local state is used

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
    const [searchName, setSearchName] = useState<string>('');

    const onReset = () => {
        if (
            searchParams.get('name') === null
            && searchParams.get('primaryMuscles') === null
            && searchParams.get('equipmentId') === null
        ) {
            return;
        }

        setSearchParams({});
        setEquipmentId(undefined);
        setPrimaryMuscleId(undefined);
        setSearchName('');
        dispatch(fetchExerciseCards());
    };

    const onApplyFilters = useCallback(() => {
        const filterObject = makeFilterObject(
            primaryMuscleId,
            equipmentId,
            searchName,
        );
        // @ts-ignore
        setSearchParams(filterObject);
        dispatch(fetchExerciseCards(filterObject));
    }, [equipmentId, primaryMuscleId]);

    const debouncedFetchExercises = useDebounce((value: string) => {
        const filterObject = makeFilterObject(
            primaryMuscleId,
            equipmentId,
            value,
        );
        // @ts-ignore
        setSearchParams(filterObject);
        dispatch(fetchExerciseCards(filterObject));
    }, 350);

    const onChangeSearchValue = (value: string) => {
        setSearchName(value);
        debouncedFetchExercises(value);
    };

    return (
        <div>
            <div className={classNames(cls.ExercisesControl, {}, [])}>
                <SearchInput
                    onChange={onChangeSearchValue}
                    value={searchName}
                    placeholder={t('Поиск по названию...')}
                />
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
