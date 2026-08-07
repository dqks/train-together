import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { deleteExercise } from '../../model/service/deleteExercise/deleteExercise.ts';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

interface DeleteExerciseButtonProps {
    theme?: ThemeButton
    className?: string;
    exerciseId: number;
    onDelete: () => void;
}

export const DeleteExerciseButton = (props : DeleteExerciseButtonProps) => {
    const { t } = useTranslation();
    const {
        exerciseId,
        className,
        theme = ThemeButton.PRIMARY,
        onDelete,
    } = props;

    const deleteHandler = async () => {
        const response = await deleteExercise(exerciseId);
        if (response.data.success) {
            onDelete();
        }
    };

    return (
        <Button
            theme={theme}
            onClick={deleteHandler}
            className={classNames('', {}, [className])}
            type="button"
        >
            {t('Удалить')}
        </Button>
    );
};
