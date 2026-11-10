import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { deleteExercise } from '../../model/service/deleteExercise/deleteExercise.ts';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { ConfirmModal } from '@/shared/ui/ConfirmModal/ConfirmModal.tsx';
import { useOpen } from '@/shared/lib/useOpen/useOpen.tsx';

interface DeleteExerciseButtonProps {
    // className?: string;
    exerciseId: number;
}

export const DeleteExerciseButton = ({ exerciseId } : DeleteExerciseButtonProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isOpen, openHandler] = useOpen()

    const deleteHandler = async () => {
        const response = await deleteExercise(exerciseId);
        if (response.data.success) {
            navigate(AuthRoutePath.my_exercises);
        }
    };

    return (
        <>
            <ConfirmModal 
                text='Вы уверены, что хотите удалить упражнение?'
                isOpen={isOpen} 
                onOutsideClick={openHandler} 
                callback={deleteHandler}
            />
            <Button 
                onClick={openHandler} 
                type="button">
                    {t('Удалить')}
            </Button>
        </>
    );
};
