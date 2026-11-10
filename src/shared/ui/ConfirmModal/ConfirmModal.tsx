import { useTranslation } from 'react-i18next';
import { Modal } from '@/shared/ui/Modal/Modal';
import cls from './ConfirmModal.module.scss';
import { Button, ThemeButton } from '../Button/Button';

interface ConfirmModalProps {
    isOpen: boolean
    onOutsideClick: () => void
    callback: () => void
    title?: string
    text: string
}

export const ConfirmModal = (props: ConfirmModalProps) => {
    const { t } = useTranslation();

    const {
        isOpen,
        title = "Подтверждение",
        text,
        onOutsideClick,
        callback,
    } = props;

    return (
        <Modal
            modalTitle={title}
            onOutsideClick={onOutsideClick}
            isOpen={isOpen}
        >
            <h2 className={cls.title}>{t(text)}</h2>
            <div className={cls.buttonWrapper}>
                <Button
                    onClick={callback}
                    type="button"
                >
                    {t('Да')}
                </Button>
                <Button
                    type="button"
                    theme={ThemeButton.SECONDARY}
                    onClick={onOutsideClick}
                >
                    {t('Нет')}
                </Button>
            </div>
        </Modal>
    );
};
