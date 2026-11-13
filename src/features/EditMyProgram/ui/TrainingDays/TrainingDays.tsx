import { useTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'react';
import cls from './TrainingDays.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { EditableDayCard } from '@/entities/Program';
import type { DayOfWeek } from '@/entities/Program/model/types/programSchema.ts';
import type { EditDaysInfo, EditProgramErrorDays } from '../../model/types/editProgramSchema';

interface TrainingDaysProps {
    editDaysInfo: EditDaysInfo[] | undefined
    disableAddDayButton: boolean
    onChangeTrainingDays: (days: EditDaysInfo[] | undefined) => void
    onSelectExercise: (dayId: number) => void
    daysOfWeek: DayOfWeek[] | null
    errorDays: EditProgramErrorDays
}

export const TrainingDays = (props : TrainingDaysProps) => {
    const { t } = useTranslation();
    const {
        editDaysInfo,
        daysOfWeek,
        errorDays,
        disableAddDayButton,
        onChangeTrainingDays,
        onSelectExercise,
    } = props;

    const onChangeExerciseReps = (dayIndex: number, exIndex: number, reps: number) => {
        onChangeTrainingDays(editDaysInfo?.map((td, index) => (index === dayIndex
            ? {
                ...td,
                exercises: td.exercises.map((ex, eIndex) => (eIndex === exIndex ? { ...ex, reps } : ex)),
            }
            : td)));
    };

    const onChangeExerciseSets = (dayIndex: number, exIndex: number, sets: number) => {
        onChangeTrainingDays(editDaysInfo?.map((td, index) => (index === dayIndex
            ? {
                ...td,
                exercises: td.exercises.map((ex, eIndex) => (eIndex === exIndex ? { ...ex, sets } : ex)),
            }
            : td)));
    };

    const onDeleteExercise = (dayIndex: number, exIndex: number) => {
        onChangeTrainingDays(
            editDaysInfo?.map((td, index) => (index === dayIndex
                ? {
                    ...td,
                    exercises: td.exercises.filter((_rs, eIndex) => eIndex !== exIndex),
                }
                : td)),
        );
    };

    const onDeleteDay = (dayIndex: number) => {
        onChangeTrainingDays(editDaysInfo?.filter((_, index) => (index !== dayIndex)));
    };

    const onAddTrainingDay = () => {
        if (editDaysInfo && editDaysInfo.length < 7) {
            const days = [...editDaysInfo, {
                dayId: 100,
                dayOfWeekId: 1,
                name: '',
                description: '',
                exercises: [],
            }];
            onChangeTrainingDays(days);
        }
    };

    const onChangeDayName = useCallback((dayName: string, dayId: number) => {
        const days = editDaysInfo?.map((td) => {
            if (td.dayId !== dayId) {
                return td;
            }
            return {
                ...td,
                name: dayName,
            };
        });
        
        onChangeTrainingDays(days);
    }, [onChangeTrainingDays, editDaysInfo]);

    const onChangeDayOfWeek = useCallback((dayOfWeekIdNew: number, dayId: number) => {
        const days = editDaysInfo?.map((td) => {
            if (td.dayId !== dayId) {
                return td;
            }
            // changed
            return {
                ...td,
                dayOfWeekId: dayOfWeekIdNew,
            };
        });
        onChangeTrainingDays(days);
    }, [onChangeTrainingDays, editDaysInfo])
       
    const daySort = useMemo(() => {
        if (daysOfWeek) {
            const sort : Record<number, number> = {}
            for (const d of daysOfWeek) {
                sort[d.id] = d.sortOrder
            }
            return sort
        }
    }, [daysOfWeek])    

    if (!daySort) {
        return null
    }

    const trainingDaysCards = editDaysInfo
    ?  [...editDaysInfo]
        ?.sort((t1, t2) => daySort[t1.dayOfWeekId] - daySort[t2.dayOfWeekId])
        ?.map((td, dayIndex) =>{ 
            return (
            <EditableDayCard
                errors={errorDays}
                selectedDayOfWeekId={td.dayOfWeekId}
                daysOfWeek={daysOfWeek}
                dayIndex={dayIndex}
                dayNumber={dayIndex + 1}
                dayId={td.dayId}
                dayName={td.name}
                exercises={td.exercises ?? []}
                key={td.dayId}
                onChangeExerciseReps={onChangeExerciseReps}
                onChangeExerciseSets={onChangeExerciseSets}
                onDeleteDay={onDeleteDay}
                onDeleteExercise={onDeleteExercise}
                onSelectExercise={onSelectExercise}
                onChangeDayName={onChangeDayName}
                onChangeDayOfWeek={onChangeDayOfWeek}
            />
    )}) : null    

    return (
        <section className={cls.programSection}>
            <div className={cls.sectionHeader}>
                <h2 className={cls.sectionTitle}>{t('Дни тренировок')}</h2>
                <Button
                    theme={ThemeButton.OUTLINE}
                    onClick={onAddTrainingDay}
                    disabled={disableAddDayButton}
                >
                    {t('Добавить день')}
                </Button>
            </div>
            <div className={cls.trainingDays}>
                { trainingDaysCards }
            </div>
        </section>
    );
};
