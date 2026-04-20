import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { deleteExercise } from '../../model/service/deleteExercise/deleteExercise.ts';

interface DeleteExerciseButtonProps {
    // className?: string;
    exerciseId: number;
}

export const DeleteExerciseButton = ({ exerciseId } : DeleteExerciseButtonProps) => {
    const { t } = useTranslation();

    const deleteHandler = async () => {
        await deleteExercise(exerciseId);
    };

    return (
        <Button onClick={deleteHandler} type="button">{t('Удалить')}</Button>
    );
};
