import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import cls from './ExerciseSelection.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { SearchInput } from '@/shared/ui/SearchInput/SearchInput.tsx';
import {
    SelectableExerciseCard,
} from '@/features/EditMyProgram/ui/ExerciseSelection/SelectableExerciseCard/SelectableExerciseCard.tsx';
import { fetchExerciseCards, getExerciseCards } from '@/entities/Exercise';
import { getSearch, getSelectedEquipmentId, getSelectedExercises, getSelectedPrimaryMuscleId } from '../../model/selectors/editProgramSelectors.ts';
import { editProgramActions } from '../../model/slice/editProgramSlice';
import type { ExerciseDay } from '@/entities/Program/index.ts';
import { useDebounce } from '@/shared/lib/useDebounce/useDebounce.ts';
import { EquipmentFilter, MuscleFilter } from '@/features/FilterExercises/index.ts';

export type ExerciseSelectionExercise = {
    id: number;
    name: string;
    muscles: string[];
    equipment: string[];
};

export type ExerciseSelectionProps = {
    onBack: () => void;
    onAddExercise: () => void;
};

export const ExerciseSelection = ({
    onBack,
    onAddExercise,
}: ExerciseSelectionProps) => {
    const { t } = useTranslation();
    const selectedExercises = useSelector(getSelectedExercises);
    // В будущем хранить в entity adapter TODO
    const exercises = useSelector(getExerciseCards);
    const search = useSelector(getSearch);
    const selectedEquipmentId = useSelector(getSelectedEquipmentId);
    const selectedPrimaryMuscleId = useSelector(getSelectedPrimaryMuscleId);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (!exercises) dispatch(fetchExerciseCards());
    }, [dispatch]);

    const selectedCount = selectedExercises?.length;

    const toggleSelected = (id: number | undefined) => {
        if (!selectedExercises || !id) {
            return;
        }

        const exercise = {
            sets: 1,
            reps: 1,
            exerciseOrder: 0,
            exercise: exercises?.find(e => e.id == id)
        } as ExerciseDay

        if (selectedExercises.find(e => e.exercise.id == id)) {
            dispatch(
                editProgramActions
                    .setSelectedExercises(selectedExercises.filter((e) => e.exercise.id !== id)
                )
            );
            return;
        }
        dispatch(editProgramActions.setSelectedExercises([...selectedExercises, exercise]));
    };

    const clearSelected = () => {
        dispatch(editProgramActions.setSelectedExercises([]))
    };

    const clearFilters = () => {
        dispatch(editProgramActions.setSelectedPrimaryMuscleId(''))
        dispatch(editProgramActions.setSelectedEquipmentId(''))
        dispatch(editProgramActions.setSearch(""))
        dispatch(fetchExerciseCards());
    };

    const handleAddToProgram = () => {
        onAddExercise();
    };

    const onSetSelectedPrimaryMuscleId = useCallback((value: string) => {
        dispatch(editProgramActions.setSelectedPrimaryMuscleId(value))
    }, [dispatch])

    const onSetSelectedEquipmentId = useCallback((value: string) => {
        dispatch(editProgramActions.setSelectedEquipmentId(value))
    }, [dispatch])

    const debouncedFetchExercises = useDebounce((value: string ) => {
        dispatch(fetchExerciseCards({name: value}));
    }, 350);

    const applySearchHandler = useCallback((value: string) => {
        dispatch(editProgramActions.setSearch(value))
        debouncedFetchExercises(value)
    }, [dispatch, fetchExerciseCards])

    const applyFiltersHandler = useCallback(() => {
        dispatch(fetchExerciseCards({
            equipmentId: selectedEquipmentId,
            primaryMuscles: selectedPrimaryMuscleId,
        }));
    }, [
        dispatch,
        fetchExerciseCards, 
        selectedEquipmentId,
        selectedPrimaryMuscleId,
    ])

    console.log(exercises);

    return (
        <div className={cls.ExerciseSelection}>
            {/* Header */}
            <div className={cls.selectHeader}>
                <div className={cls.left}>
                    <h1 className={cls.pageTitle}>{t('Выбор упражнения')}</h1>
                    <p className={cls.pageSubtitle}>
                        {t('Найдите упражнение и добавьте его в выбранный день программы')}
                    </p>
                </div>

                <div className={cls.actions}>
                    <Button
                        theme={ThemeButton.OUTLINE}
                        type="button"
                        onClick={onBack}
                    >
                        {t('Назад к редактору')}
                    </Button>

                    <Button
                        theme={ThemeButton.PRIMARY}
                        type="button"
                        // onClick={openSelectedModal}
                        disabled={selectedCount === 0}
                    >
                        {t('Выбрано')}
                        {' : '}
                        {selectedCount}
                    </Button>
                </div>
            </div>

            {/* Search & Filters */}
            <div className={cls.filtersBar}>
                <div className={cls.searchBox}>
                    <SearchInput
                        placeholder={t('Поиск по названию...')}
                        value={search}
                        onChange={applySearchHandler}
                    />
                    <MuscleFilter 
                        onApplyFilters={applyFiltersHandler} 
                        setPrimaryMuscleId={onSetSelectedPrimaryMuscleId} 
                        primaryMuscleId={selectedPrimaryMuscleId}
                    />
                    <EquipmentFilter 
                        onApplyFilters={applyFiltersHandler} 
                        setEquipmentId={onSetSelectedEquipmentId}
                        equipmentId={selectedEquipmentId} 
                    />
                </div>
                <div className={cls.filtersInfo}>
                    <span className={cls.resultsCount}>
                        {t('Показано')}
                        :
                        <strong className={cls.resultsCountValue}>{exercises?.length}</strong>
                    </span>

                    <Button
                        theme={ThemeButton.OUTLINE}
                        type="button"
                        onClick={clearFilters}
                        disabled={!search?.trim() && !selectedPrimaryMuscleId && !selectedEquipmentId}
                    >
                        {t('Сбросить')}
                    </Button>
                </div>
            </div>

            {/* Empty state */}
            <div className={`${cls.emptyState} ${exercises?.length === 0 ? cls.visible : ''}`}>
                {t('Ничего не найдено по текущим фильтрам.')}
                <div className={cls.emptyActions}>
                    <Button
                        theme={ThemeButton.PRIMARY}
                        type="button"
                        onClick={clearFilters}
                    >
                        {t('Сбросить фильтры')}
                    </Button>
                </div>
            </div>

            {/* Exercise Cards Grid */}
            <div className={cls.selectGrid}>
                {exercises?.map((ex) => {
                    const isSelected = selectedExercises?.find(e => e.exercise.id == ex.id);
                    return (
                        <SelectableExerciseCard
                            key={ex.id}
                            toggleSelected={toggleSelected}
                            isSelected={!!isSelected}
                            exercise={ex}
                        />
                    );
                })}
            </div>

            {/* Selection footer (sticky) */}
            <div className={cls.selectionFooter}>
                <div className={cls.selectionFooterInner}>
                    <div className={cls.selectionSummary}>
                        {t('Выбрано')}
                        :
                        <strong>{selectedCount}</strong>
                        <span className={cls.dot}>•</span>
                        <span>{t('Нажмите «Добавить в программу» чтобы вернуться в редактор')}</span>
                    </div>

                    <div className={cls.actions}>
                        <Button
                            theme={ThemeButton.PRIMARY}
                            type="button"
                            disabled={selectedCount === 0}
                            onClick={handleAddToProgram}
                        >
                            {t('Добавить в программу')}
                        </Button>

                        <Button
                            theme={ThemeButton.OUTLINE}
                            type="button"
                            disabled={selectedCount === 0}
                            onClick={clearSelected}
                        >
                            {t('Очистить выбранное')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
