import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { deleteExercise } from '../../model/service/deleteExercise/deleteExercise.ts';

interface DeleteExerciseButtonProps {
    // className?: string;
    exerciseId: number;
    redirectRoute: string
}

export const DeleteExerciseButton = ({ exerciseId, redirectRoute } : DeleteExerciseButtonProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const deleteHandler = async () => {
        const response = await deleteExercise(exerciseId);
        if (response.data.success) {
            navigate(redirectRoute);
        }
    };

    return (
        <Button onClick={deleteHandler} type="button">{t('Удалить')}</Button>
    );
};
