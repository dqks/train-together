import { type ReactNode } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Modal.module.scss';
import { useOutsideClick } from '../../lib/useOutsideClick/useOutsideClick.tsx';
import { Portal } from '@/shared/ui/Portal/Portral.tsx';
import Cross from '@/shared/assets/icons/cross.svg?react';

type ModalProps = {
    children: ReactNode
    onOutsideClick: () => void;
    isOpen: boolean;
    wrapperClassName?: string;
    modalTitle: string;
    footerContent?: ReactNode;
}

export const Modal = (props: ModalProps) => {
    const {
        children,
        onOutsideClick,
        isOpen,
        wrapperClassName,
        modalTitle,
        footerContent,
    } = props;

    const { componentRef } = useOutsideClick(onOutsideClick, isOpen);

    return isOpen
    && (
        <Portal>
            <div
                ref={componentRef}
                className={cls.modalOverlay}
            >
                <div
                    className={classNames(cls.modal, {}, [wrapperClassName, cls.modalLg])}
                >
                    <div className={cls.modalHeader}>
                        <h3 className={cls.modalTitle}>{modalTitle}</h3>
                        <button
                            onClick={onOutsideClick}
                            type="button"
                            className={cls.modalClose}
                        >
                            <Cross />
                        </button>
                    </div>
                    <div className={cls.modalBody}>
                        {children}
                    </div>
                    {
                        footerContent && (
                            <div className={cls.modalFooter}>
                                {footerContent}
                            </div>
                        )
                    }
                </div>
            </div>
        </Portal>
    );
};
