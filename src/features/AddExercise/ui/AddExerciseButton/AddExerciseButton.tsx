import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { AddExerciseFormAsync } from '@/features/AddExercise/ui/AddExerciseForm/AddExerciseForm.async.tsx';
import { useOpen } from '@/shared/lib/useOpen/useOpen.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';

export const AddExerciseButton = () => {
    const { t } = useTranslation();

    const [isOpen, openHandler] = useOpen();

    return (
        <>
            <Button type="button" onClick={openHandler}>{t('+ Создать упражнение')}</Button>
            <Modal
                isOpen={isOpen}
                onOutsideClick={openHandler}
                modalTitle={t('Создать упражнение')}
            >
                <Suspense fallback={(
                    <PageLoader />
                )}
                >
                    <AddExerciseFormAsync
                        closeHandler={openHandler}
                    />
                </Suspense>
            </Modal>
        </>
    );
};
