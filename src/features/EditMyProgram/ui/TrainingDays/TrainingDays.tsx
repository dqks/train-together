import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import cls from './TrainingDays.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import type { TrainingDay } from '@/entities/Program';
import { EditableDayCard } from '@/entities/Program';
import type { DayOfWeek } from '@/entities/Program/model/types/programSchema.ts';

interface TrainingDaysProps {
    trainingDays: TrainingDay[] | undefined
    onChangeTrainingDays: (days: TrainingDay[] | undefined) => void
    onSelectExercise: () => void
    daysOfWeek: DayOfWeek[] | null
}

export const TrainingDays = (props : TrainingDaysProps) => {
    const { t } = useTranslation();
    const {
        trainingDays,
        onChangeTrainingDays,
        onSelectExercise,
        daysOfWeek,
    } = props;

    const onChangeExerciseReps = (dayIndex: number, exIndex: number, reps: number) => {
        onChangeTrainingDays(trainingDays?.map((td, index) => (index === dayIndex
            ? {
                ...td,
                exercises: td.exercises.map((ex, eIndex) => (eIndex === exIndex ? { ...ex, reps } : ex)),
            }
            : td)));
    };

    const onChangeExerciseSets = (dayIndex: number, exIndex: number, sets: number) => {
        onChangeTrainingDays(trainingDays?.map((td, index) => (index === dayIndex
            ? {
                ...td,
                exercises: td.exercises.map((ex, eIndex) => (eIndex === exIndex ? { ...ex, sets } : ex)),
            }
            : td)));
    };

    const onDeleteExercise = (dayIndex: number, exIndex: number) => {
        onChangeTrainingDays(
            trainingDays?.map((td, index) => (index === dayIndex
                ? {
                    ...td,
                    exercises: td.exercises.filter((_rs, eIndex) => eIndex !== exIndex),
                }
                : td)),
        );
    };

    const onDeleteDay = (dayIndex: number) => {
        onChangeTrainingDays(trainingDays?.filter((_, index) => (index !== dayIndex)));
    };

    const onAddTrainingDay = () => {
        if (trainingDays && trainingDays.length < 7) {
            const days = [...trainingDays, {
                id: 100,
                name: '',
                description: '',
                day: {
                    id: 1,
                    name: '',
                },
                exercises: [],
            }];
            onChangeTrainingDays(days);
        }
    };

    const onChangeDayName = useCallback((dayName: string, dayId: number) => {
        const days = trainingDays?.map((td) => {
            if (td.id !== dayId) {
                return td;
            }
            // changed
            return {
                ...td,
                name: dayName,
            };
        });
        onChangeTrainingDays(days);
    }, [onChangeTrainingDays, trainingDays]);

    console.log(trainingDays);

    // const onChangeDayOfWeek = useCallback((dayOfWeekId: number, dayId: number) => {
    //     const days = trainingDays?.map((td) => {
    //         if (td.id !== dayId) {
    //             return td;
    //         }
    //         // changed
    //         return {
    //             ...td,
    //             name: dayName,
    //         };
    //     });
    //     onChangeTrainingDays(days);
    // }, [onChangeTrainingDays, trainingDays]);

    const trainingDaysCards = trainingDays?.map((td, dayIndex) => (
        <EditableDayCard
            selectedDayOfWeekId={td.day.id}
            daysOfWeek={daysOfWeek}
            onChangeDayName={onChangeDayName}
            dayIndex={dayIndex}
            dayNumber={dayIndex + 1}
            onChangeExerciseReps={onChangeExerciseReps}
            onChangeExerciseSets={onChangeExerciseSets}
            onDeleteDay={onDeleteDay}
            onDeleteExercise={onDeleteExercise}
            onSelectExercise={onSelectExercise}
            trainingDay={td}
            key={td.id}
        />
    ));

    return (
        <section className={cls.programSection}>
            <div className={cls.sectionHeader}>
                <h2 className={cls.sectionTitle}>{t('Дни тренировок')}</h2>
                <Button
                    theme={ThemeButton.OUTLINE}
                    type="button"
                    onClick={onAddTrainingDay}
                    disabled={trainingDays ? trainingDays.length >= 7 : true}
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
