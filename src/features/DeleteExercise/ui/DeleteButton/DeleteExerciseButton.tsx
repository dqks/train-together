import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { deleteExercise } from '../../model/service/deleteExercise/deleteExercise.ts';
import { ConfirmModal } from '@/shared/ui/ConfirmModal/ConfirmModal.tsx';
import { useOpen } from '@/shared/lib/useOpen/useOpen.tsx';

interface DeleteExerciseButtonProps {
    // className?: string;
    exerciseId: number;
    redirectRoute: string
}

export const DeleteExerciseButton = ({ exerciseId, redirectRoute } : DeleteExerciseButtonProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useOpen()
    
    const deleteHandler = async () => {
        const response = await deleteExercise(exerciseId);
        if (response.data.success) {
            navigate(redirectRoute);
            setIsOpen()
        }
    };

    return (
        <>
            <Button onClick={setIsOpen} type="button">{t('Удалить')}</Button>
            <ConfirmModal 
                callback={deleteHandler}
                onOutsideClick={setIsOpen}
                isOpen={isOpen}
            />
        </>
    );
};
