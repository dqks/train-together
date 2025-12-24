import { type ReactNode } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Modal.module.scss';
import { useOutsideClick } from '../../lib/useOutsideClick/useOutsideClick.tsx';
import { Portal } from '@/shared/ui/Portal/Portral.tsx';

type ModalProps = {
    children: ReactNode
    onOutsideClick: () => void;
    isOpen: boolean;
    wrapperClassName?: string;
}

export const Modal = ({
    children,
    onOutsideClick,
    isOpen,
    wrapperClassName,
}: ModalProps) => {
    const { componentRef } = useOutsideClick(onOutsideClick, isOpen);

    return isOpen
    && (
        <Portal>
            <div
                ref={componentRef}
                className={cls.Modal}
            >
                <div
                    // Вернул класс для стилизации обертки модалки
                    // Но стилизовывать children нужно все равно
                    className={classNames(cls.content, {}, [wrapperClassName])}
                >
                    <i onClick={onOutsideClick} className={cls.closeIcon}>
                        &times;
                    </i>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
