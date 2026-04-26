import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { deleteProgram } from '../../model/services/deleteProgram.ts';

interface DeleteProgramButtonProps {
    // className?: string;
    programId: number;
    redirectTo: string;
}

export const DeleteProgramButton = ({ programId, redirectTo } : DeleteProgramButtonProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const deleteHandler = async () => {
        const response = await deleteProgram(programId);
        if (response.data.success) {
            navigate(redirectTo);
        }
    };

    return (
        <Button onClick={deleteHandler} type="button">{t('Удалить программу')}</Button>
    );
};
