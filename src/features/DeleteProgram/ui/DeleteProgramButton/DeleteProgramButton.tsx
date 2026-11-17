import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { deleteProgram } from '../../model/services/deleteProgram.ts';
import { ErrorMessage } from '@/shared/ui/ErrorMessage/ErrorMessage.tsx';
import { Flex } from '@/shared/ui/Flex/Flex/Flex.tsx';

interface DeleteProgramButtonProps {
    programId: number | null;
    redirectTo: string;
}

export const DeleteProgramButton = ({ programId, redirectTo }: DeleteProgramButtonProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [error, setError] = useState<string | undefined>(undefined);
    const deleteHandler = async () => {
        if (programId) {
            try {
                const response = await deleteProgram(programId);
                if (response.data.success) {
                    navigate(redirectTo);
                }
            } catch (e) {
                setError('Произошла ошибка при удалении программы');
            }
        }
    };

    return (
        <Flex
            direction="row"
            justify="center"
            align="center"
        >
            <Button
                role="button"
                onClick={deleteHandler}
                type="button"
            >
                {t('Удалить программу')}
            </Button>
            <ErrorMessage messages={error} />
        </Flex>
    );
};
