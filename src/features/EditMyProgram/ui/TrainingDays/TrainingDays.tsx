import { useTranslation } from 'react-i18next';
import type { Dispatch, SetStateAction } from 'react';
import cls from './TrainingDays.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import type { Day } from '@/entities/Program';
import { DayHeader } from '../DayHeader/DayHeader';
import { ExerciseRow } from '@/features/EditMyProgram/ui/ExerciseRow/ExerciseRow.tsx';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

interface TrainingDaysProps {
    trainingDays: Day[] | undefined
    setTrainingDays: Dispatch<SetStateAction<Day[] | undefined>>
    onSelectExercise: () => void
}

export const TrainingDays = (props : TrainingDaysProps) => {
    const { t } = useTranslation();

    const { trainingDays, setTrainingDays, onSelectExercise } = props;

    const onChangeExerciseReps = (dayIndex: number, exIndex: number, reps: number) => {
        setTrainingDays((prevState) => prevState?.map((td, index) => (index === dayIndex
            ? {
                ...td,
                exercises: td.exercises.map((ex, eIndex) => (eIndex === exIndex ? { ...ex, reps } : ex)),
            }
            : td)));
    };

    const onChangeExerciseSets = (dayIndex: number, exIndex: number, sets: number) => {
        setTrainingDays((prevState) => prevState?.map((td, index) => (index === dayIndex
            ? {
                ...td,
                exercises: td.exercises.map((ex, eIndex) => (eIndex === exIndex ? { ...ex, sets } : ex)),
            }
            : td)));
    };

    const onDeleteExercise = (dayIndex: number, exIndex: number) => {
        setTrainingDays((prevState) => prevState?.map((td, index) => (index === dayIndex
            ? {
                ...td,
                exercises: td.exercises.filter((_rs, eIndex) => eIndex !== exIndex),
            }
            : td)));
    };

    const onDeleteDay = (dayIndex: number) => {
        setTrainingDays((prevState) => prevState?.filter((_, index) => (index !== dayIndex)));
    };

    const trainingDaysCards = trainingDays?.map((td, dayIndex) => (
        <div className={classNames(cls.trainingDayCard, {}, ['editable'])} key={td.id}>
            <DayHeader
                onDeleteDay={onDeleteDay}
                dayName={td.day.name}
                dayNumber={dayIndex + 1}
            />
            <div className={cls.dayExercises}>
                {td.exercises.map((exercise, exerciseIndex) => (
                    <ExerciseRow
                        key={exercise.id}
                        exerciseNumber={exerciseIndex + 1}
                        exerciseName={exercise.exercise.name}
                        reps={exercise.reps}
                        sets={exercise.sets}
                        exerciseId={exercise.exercise.id}
                        dayIndex={dayIndex}
                        exerciseIndex={exerciseIndex}
                        primaryMuscle={exercise.exercise.primaryMuscle.name}
                        onChangeExerciseReps={onChangeExerciseReps}
                        onChangeExerciseSets={onChangeExerciseSets}
                        onDeleteExercise={onDeleteExercise}
                        // primaryMuscleEng={exercise.exercise.primaryMuscle.nameEng}
                    />
                ))}
                <Button
                    theme={ThemeButton.OUTLINE}
                    type="button"
                    className={cls.addExerciseBtn}
                    onClick={onSelectExercise}
                >
                    {t('+ Добавить упражнение')}
                </Button>
            </div>
        </div>
    ));

    return (
        <section className={cls.programSection}>
            <div className={cls.sectionHeader}>
                <h2 className={cls.sectionTitle}>{t('Дни тренировок')}</h2>
                <Button theme={ThemeButton.OUTLINE} type="button">
                    {t('Добавить день')}
                </Button>
            </div>
            <div className={cls.trainingDays}>
                { trainingDaysCards }
            </div>
        </section>
    );
};
