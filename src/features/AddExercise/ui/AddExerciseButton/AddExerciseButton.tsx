import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import cls from './AddExerciseButton.module.scss';
import { SidePanelAddContentAsync } from '../SidePanelAddContent/SidePanelAddContent.async.tsx';
import { useOpen } from '@/shared/lib/useOpen/useOpen.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';

export const AddExerciseButton = () => {
    const { t } = useTranslation();

    const [isOpen, openHandler] = useOpen();

    return (
        <>
            <Button type="button" onClick={openHandler}>{t('+ Создать упражнение')}</Button>
            <Modal
                isOpen={isOpen}
                onOutsideClick={openHandler}
                wrapperClassName={cls.modal}
            >
                <Suspense fallback={(
                    <div className={cls.loaderWrapper}>
                        <Loader />
                    </div>
                )}
                >
                    <SidePanelAddContentAsync
                        closeHandler={openHandler}
                        className={cls.sidePanelWrapper}
                    />
                </Suspense>
            </Modal>
        </>
    );
};
