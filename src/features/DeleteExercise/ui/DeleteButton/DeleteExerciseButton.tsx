import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { deleteExercise } from '../../model/service/deleteExercise/deleteExercise.ts';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';

interface DeleteExerciseButtonProps {
    // className?: string;
    exerciseId: number;
}

export const DeleteExerciseButton = ({ exerciseId } : DeleteExerciseButtonProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const deleteHandler = async () => {
        const response = await deleteExercise(exerciseId);
        if (response.data.success) {
            navigate(AuthRoutePath.my_exercises);
        }
    };

    return (
        <Button onClick={deleteHandler} type="button">{t('Удалить')}</Button>
    );
};
