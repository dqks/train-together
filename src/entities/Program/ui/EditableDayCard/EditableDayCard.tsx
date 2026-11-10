import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EditableDayCard.module.scss';
import { DayHeader } from './DayHeader/DayHeader';
import { ExerciseRow } from './ExerciseRow/ExerciseRow';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import type { DayOfWeek, ExerciseDay } from '../../model/types/programSchema';
import { useCallback } from 'react';
import { nanoid } from 'nanoid';

interface DayCardProps {
    // TODO возможно что-то придумать, т.е. тип равен EditProgramErrorDays
    errors: Partial<Record<string, string[]>> | undefined
    dayId: number | undefined
    dayName: string | undefined
    exercises: ExerciseDay[]
    className?: string;
    dayNumber: number;
    dayIndex: number;
    daysOfWeek: DayOfWeek[] | null
    selectedDayOfWeekId: number | null
    onChangeExerciseReps: (dayId: number, exId: number, reps: number) => void
    onChangeExerciseSets: (dayId: number, exId: number, sets: number) => void
    onDeleteExercise: (dayId: number, exId: number) => void
    onDeleteDay: (dayIndex: number) => void
    onSelectExercise: (dayId: number) => void
    onChangeDayName: (name: string, dayId: number) => void
    onChangeDayOfWeek: (dayOfWeekId: number, dayId: number) => void
}

export const EditableDayCard = (props : DayCardProps) => {
    const { t } = useTranslation();
    const {
        className,
        dayIndex,
        dayNumber,
        daysOfWeek,
        selectedDayOfWeekId,
        dayId,
        dayName,
        exercises,
        errors,
        onChangeExerciseReps,
        onChangeExerciseSets,
        onDeleteDay,
        onDeleteExercise,
        onSelectExercise,
        onChangeDayName,
        onChangeDayOfWeek,
    } = props;

    const selectExerciseHandler = useCallback(() => {
        if (dayId) {
            onSelectExercise(dayId)
        }
    }, [onSelectExercise])

    return (
        <div className={classNames(cls.trainingDayCard, {}, ['editable', className])}>
            <DayHeader
                selectedDayOfWeekId={selectedDayOfWeekId}
                daysOfWeek={daysOfWeek}
                dayId={dayId}
                onChangeDayName={onChangeDayName}
                onDeleteDay={onDeleteDay}
                onChangeDayOfWeek={onChangeDayOfWeek}
                dayName={dayName || ''}
                dayNumber={dayNumber}
            />
            <div className={cls.dayExercises}>
                {exercises.map((exercise, exerciseIndex) => (
                    <ExerciseRow
                        error={errors}
                        key={nanoid()}
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
                    onClick={selectExerciseHandler}
                >
                    {t('+ Добавить упражнение')}
                </Button>
            </div>
        </div>
    );
};
