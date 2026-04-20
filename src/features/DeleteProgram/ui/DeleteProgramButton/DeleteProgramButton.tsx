import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { deleteProgram } from '../../model/services/deleteProgram.ts';

interface DeleteProgramButtonProps {
    // className?: string;
    programId: number;
}

export const DeleteProgramButton = ({ programId } : DeleteProgramButtonProps) => {
    const { t } = useTranslation();

    const deleteHandler = async () => {
        await deleteProgram(programId);
    };

    return (
        <Button onClick={deleteHandler} type="button">{t('Удалить программу')}</Button>
    );
};
