import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import cls from './ExerciseRow.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import Cross from '@/shared/assets/icons/cross.svg?react';
import ToDetails from '@/shared/assets/icons/to-details.svg?react';
// import Burger from '@/shared/assets/icons/burger.svg?react';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';

interface ExerciseRowProps {
    exerciseName: string;
    exerciseNumber: number;
    sets: number;
    reps: number;
    exerciseId: number;
    dayIndex: number;
    exerciseIndex: number;
    primaryMuscle: string;
    onChangeExerciseReps: (dayId: number, exId: number, reps: number) => void
    onChangeExerciseSets: (dayId: number, exId: number, sets: number) => void
    onDeleteExercise: (dayId: number, exId: number) => void
    // primaryMuscleEng: string;
}

export const ExerciseRow = (props : ExerciseRowProps) => {
    const { t } = useTranslation();
    const {
        exerciseName,
        exerciseNumber,
        sets,
        reps,
        exerciseId,
        primaryMuscle,
        exerciseIndex,
        dayIndex,
        onChangeExerciseReps,
        onChangeExerciseSets,
        onDeleteExercise,
        // primaryMuscleEng,
    } = props;
    return (
        <div className={classNames(cls.exerciseRow, {}, ['editable'])}>
            {/* <div className={cls.exerciseDragHandle}> aria-hidden="true"> */}
            {/*    <Burger /> */}
            {/* </div> */}
            <div className={cls.exerciseNumber}>{exerciseNumber}</div>
            <div className={cls.exerciseDetails}>
                <span className={cls.exerciseSelectBlockText}>
                    {t(exerciseName)}
                </span>
                <div className={cls.exerciseParams}>
                    <input
                        className={cls.paramInput}
                        type="number"
                        defaultValue={sets}
                        min={1}
                        onChange={(event) => {
                            onChangeExerciseSets(dayIndex, exerciseIndex, Number(event.target.value));
                        }}
                        placeholder={t('Подходы')}
                    />
                    <span>{t('x')}</span>
                    <input
                        className={cls.paramInput}
                        type="number"
                        defaultValue={reps}
                        min={1}
                        onChange={(event) => {
                            onChangeExerciseReps(dayIndex, exerciseIndex, Number(event.target.value));
                        }}
                        placeholder={t('Повторения')}
                    />
                </div>
            </div>
            <div className={cls.exerciseMuscleTag}>{t(primaryMuscle)}</div>
            <div className={cls.exerciseActions}>
                <Button theme={ThemeButton.GHOST} type="button">
                    <Link to={`${AuthRoutePath.exercise_details}${exerciseId}`}>
                        <ToDetails className={cls.toDetailsIcon} />
                    </Link>
                </Button>
                <Button
                    onClick={() => onDeleteExercise(dayIndex, exerciseIndex)}
                    theme={ThemeButton.GHOST}
                    type="button"
                >
                    <Cross className={cls.crossIcon} />
                </Button>
            </div>
        </div>
    );
};
