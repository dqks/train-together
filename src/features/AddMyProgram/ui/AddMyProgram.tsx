import { useTranslation } from 'react-i18next';
import { lazy, Suspense } from 'react';
import cls from './AddMyProgram.module.scss';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { TooltipElement } from '@/shared/ui/TooltipElement/TooltipElement.tsx';
import { useOpen } from '@/shared/lib/useOpen/useOpen.tsx';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';

const ModalProvider = lazy(() => import('../provider/ModalProvider.tsx'));

export const AddMyProgram = () => {
    const { t } = useTranslation();
    const [isOpen, openHandler] = useOpen();

    return (
        <>
            <TooltipElement tooltipText={t('Добавить программу')}>
                <Button type="button" onClick={openHandler}>+</Button>
            </TooltipElement>

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
                    <ModalProvider />
                </Suspense>
            </Modal>
        </>
    );
};
