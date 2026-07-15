import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import cls from './ExerciseSelection.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { SearchInput } from '@/shared/ui/SearchInput/SearchInput.tsx';
import {
    SelectableExerciseCard,
} from '@/features/EditMyProgram/ui/ExerciseSelection/SelectableExerciseCard/SelectableExerciseCard.tsx';
import { fetchExerciseCards, getExerciseCards } from '@/entities/Exercise';

export type ExerciseSelectionExercise = {
    id: number;
    name: string;
    muscles: string[];
    equipment: string[];
};

export type ExerciseSelectionProps = {
    onBack: () => void;
    onAddExercise?: (selectedIds: number[]) => void;
};

const LABELS_EQUIPMENT: Record<string, string> = {
    barbell: 'Штанга',
    dumbbells: 'Гантели',
    kettlebell: 'Гиря',
    'pullup-bar': 'Турник',
    bodyweight: 'Свой вес',
    cable: 'Трос',
    machine: 'Тренажёр',
};

const LABELS_MUSCLES: Record<string, string> = {
    chest: 'Грудные',
    back: 'Спина',
    shoulders: 'Плечи',
    biceps: 'Бицепс',
    triceps: 'Трицепс',
    legs: 'Ноги',
    core: 'Пресс',
    glutes: 'Ягодицы',
};

const STORAGE_KEY = 'fitapp:selectedExercises';

function getSelectedIdsFromStorage(): number[] {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const arr = raw ? JSON.parse(raw) : [];
        return Array.isArray(arr) ? arr : [];
    } catch {
        return [];
    }
}

function setSelectedIdsToStorage(ids: number[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

export const ExerciseSelection = ({
    onBack,
    onAddExercise,
}: ExerciseSelectionProps) => {
    const { t } = useTranslation();

    const exercises = useSelector(getExerciseCards);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!exercises) dispatch(fetchExerciseCards());
    }, [dispatch]);

    const [query, setQuery] = useState('');
    const [selectedMuscle, setSelectedMuscle] = useState<string | null>(null);
    const [selectedEquipment, setSelectedEquipment] = useState<string | null>(null);

    const [selectedIds, setSelectedIds] = useState<number[]>(() => getSelectedIdsFromStorage());

    const [selectedModalOpened, setSelectedModalOpened] = useState(false);

    useEffect(() => {
        setSelectedIdsToStorage(selectedIds);
    }, [selectedIds]);

    const selectedCount = selectedIds.length;

    const visibleExercises = useMemo(() => {
        const q = query.trim().toLowerCase();

        return exercises?.filter((ex) => {
            const matchesSearch = !q || ex.name.toLowerCase().includes(q);
            const matchesMuscle = !selectedMuscle || ex?.primaryMuscle?.name === selectedMuscle;
            return matchesSearch && matchesMuscle;
        });
    }, [exercises, query, selectedMuscle, selectedEquipment]);

    const allMuscles = useMemo(() => Array.from(new Set(exercises?.flatMap((e) => e.primaryMuscle))), [exercises]);

    const toggleSelected = (id: number | undefined) => {
        setSelectedIds((prev) => {
            if (prev.includes(id)) {
                return prev.filter((x) => x !== id);
            }
            return [...prev, id];
        });
    };

    const clearSelected = () => setSelectedIds([]);

    const clearFilters = () => {
        setSelectedMuscle(null);
        setSelectedEquipment(null);
        setQuery('');
    };

    const openSelectedModal = () => setSelectedModalOpened(true);
    const closeSelectedModal = () => setSelectedModalOpened(false);

    const handleAddToProgram = () => {
        onAddExercise?.(selectedIds);
        setSelectedModalOpened(false);
    };

    const selectedExercisesForModal = useMemo(() => {
        const set = new Set(selectedIds);
        return exercises?.filter((e) => set.has(e.id));
    }, [exercises, selectedIds]);

    // Modal escape
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedModalOpened(false);
            }
        };
        if (!selectedModalOpened) {
            return undefined;
        }
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [selectedModalOpened]);

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
                        onClick={openSelectedModal}
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
                        value={query}
                        onChange={setQuery}
                    />
                </div>

                <div className={cls.filtersInfo}>
                    <span className={cls.resultsCount}>
                        {t('Показано')}
                        :
                        <strong className={cls.resultsCountValue}>{visibleExercises?.length}</strong>
                    </span>

                    <div className={cls.activeFilters}>
                        {selectedMuscle && (
                            <span className={cls.filterChip}>
                                {LABELS_MUSCLES[selectedMuscle] ?? selectedMuscle}
                            </span>
                        )}
                        {selectedEquipment && (
                            <span className={cls.filterChip}>
                                {LABELS_EQUIPMENT[selectedEquipment] ?? selectedEquipment}
                            </span>
                        )}
                    </div>

                    <Button
                        theme={ThemeButton.OUTLINE}
                        type="button"
                        onClick={clearFilters}
                        disabled={!query.trim() && !selectedMuscle && !selectedEquipment}
                    >
                        {t('Сбросить')}
                    </Button>
                </div>
            </div>

            {/* Empty state */}
            <div className={`${cls.emptyState} ${visibleExercises?.length === 0 ? cls.visible : ''}`}>
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
                    const isSelected = selectedIds.includes(ex.id);
                    return (
                        <SelectableExerciseCard
                            key={ex.id}
                            toggleSelected={toggleSelected}
                            isSelected={isSelected}
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

            {/* /!* Selected modal (template-like) *!/ */}
            {/* {selectedModalOpened && ( */}
            {/*    <div className={cls.modalOverlay}> */}
            {/*        <div className={cls.modal} role="dialog" aria-modal="true"> */}
            {/*            <div className={cls.modalHeader}> */}
            {/*                <div className={cls.modalTitle}> */}
            {/*                    <h2>{t('Выбранные упражнения')}</h2> */}
            {/*                    <p>{t('Список выбранных карточек')}</p> */}
            {/*                </div> */}

            {/*                <Button theme={ThemeButton.OUTLINE} type="button" onClick={closeSelectedModal}> */}
            {/*                    {t('Закрыть')} */}
            {/*                </Button> */}
            {/*            </div> */}

            {/*            <div className={cls.selectionList}> */}
            {/*                {selectedExercisesForModal.length === 0 ? ( */}
            {/*                    <div className={cls.selectionEmpty}> */}
            {/*                        {t('Пока ничего не выбрано')} */}
            {/*                    </div> */}
            {/*                ) : ( */}
            {/*                    selectedExercisesForModal.map((item) => ( */}
            {/*                        <div key={item.id} className={cls.selectionItem}> */}
            {/*                            <div className={cls.selectionMeta}> */}
            {/*                                <div className={cls.selectionItemName}>{item.name}</div> */}
            {/*                                <div className={cls.selectionItemTags}> */}
            {/*                                    {item.muscles.slice(0, 2).map((m) => ( */}
            {/*                                        <span key={m} className={cls.tag}> */}
            {/*                                            {LABELS_MUSCLES[m] ?? m} */}
            {/*                                        </span> */}
            {/*                                    ))} */}
            {/*                                    {item.equipment.slice(0, 2).map((eq) => ( */}
            {/*                                        <span key={eq} className={cls.tag}> */}
            {/*                                            {LABELS_EQUIPMENT[eq] ?? eq} */}
            {/*                                        </span> */}
            {/*                                    ))} */}
            {/*                                </div> */}
            {/*                            </div> */}

            {/*                            <Button */}
            {/*                                theme={ThemeButton.OUTLINE} */}
            {/*                                type="button" */}
            {/*                                onClick={() => toggleSelected(item.id)} */}
            {/*                            > */}
            {/*                                {t('Удалить')} */}
            {/*                            </Button> */}
            {/*                        </div> */}
            {/*                    )) */}
            {/*                )} */}
            {/*            </div> */}

            {/*            <div className={cls.modalFooter}> */}
            {/*                <Button */}
            {/*                    theme={ThemeButton.OUTLINE} */}
            {/*                    type="button" */}
            {/*                    onClick={clearSelected} */}
            {/*                    disabled={selectedCount === 0} */}
            {/*                > */}
            {/*                    {t('Очистить')} */}
            {/*                </Button> */}

            {/*                <Button */}
            {/*                    theme={ThemeButton.PRIMARY} */}
            {/*                    type="button" */}
            {/*                    onClick={onAddExercise} */}
            {/*                    disabled={selectedCount === 0} */}
            {/*                > */}
            {/*                    {t('Добавить в программу')} */}
            {/*                </Button> */}
            {/*            </div> */}
            {/*        </div> */}

            {/*        /!* close overlay click *!/ */}
            {/*        <button */}
            {/*            type="button" */}
            {/*            className={cls.modalBackdrop} */}
            {/*            aria-label={t('Закрыть')} */}
            {/*            onClick={closeSelectedModal} */}
            {/*        /> */}
            {/*    </div> */}
            {/* )} */}
        </div>
    );
};
