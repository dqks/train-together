import { useTranslation } from 'react-i18next';
import cls from './DayExercise.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { ExerciseRow } from '../ExerciseRow/ExerciseRow';

interface DayExerciseProps {
}

export const DayExercise = ({}: DayExerciseProps) => {
    const { t } = useTranslation();
    return (
        <div className={cls.dayExercises}>
            <ExerciseRow />
            <Button
                theme={ThemeButton.OUTLINE}
                type="button"
                className={cls.addExerciseBtn}
            >
                {t('+ Добавить упражнение')}
            </Button>
        </div>
    );
};
