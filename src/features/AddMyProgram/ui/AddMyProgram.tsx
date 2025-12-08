import { useTranslation } from 'react-i18next';
import cls from './AddMyProgram.module.scss';
import { Button } from '../../../shared/ui/Button/Button';
import { Modal } from '../../../shared/ui/Modal/Modal';
import ModalProvider from '../provider/ModalProvider.tsx';
import { TooltipElement } from '../../../shared/ui/TooltipElement/TooltipElement.tsx';
import { useModal } from '../../../shared/lib/useModal/useModal.tsx';

export const AddMyProgram = () => {
    const { t } = useTranslation();
    const [isOpen, openHandler] = useModal();

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
                <ModalProvider />
            </Modal>
        </>
    );
};
