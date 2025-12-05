import { type ReactNode, useEffect, useRef } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Modal.module.scss';

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
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const clickHandler = (event: MouseEvent) => {
            if (componentRef.current
                    && componentRef.current === event.target) {
                onOutsideClick();
            }
        };
        document.addEventListener('click', clickHandler);
        return () => {
            document.removeEventListener('click', clickHandler);
        };
    }, [onOutsideClick]);

    return isOpen
                && (
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
                );
};
