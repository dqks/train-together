import { classNames } from "../../lib/classNames/classNames";
import cls from "./Modal.module.scss"
import { useEffect, useRef } from "react";

type ModalProps = {
    children: React.ReactNode
    onOutsideClick?: () => void;
    isOpen: boolean;
}

export const Modal = ({
    children,
    onOutsideClick,
    isOpen,
}: ModalProps) => {
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (onOutsideClick) {
            const clickHandler = (event: MouseEvent) => {
                if (componentRef.current &&
                    componentRef.current === event.target) {
                    onOutsideClick()
                }
            }
            document.addEventListener("click", clickHandler)
            return () => {
                document.removeEventListener("click", clickHandler)
            }
        }
    }, [onOutsideClick]);

    return (
        <>
            {
                isOpen &&
                <div 
                    ref={componentRef}
                    className={cls.Modal}
                >   
                    <div
                    // Может быть, мне нужно удалить этот класс, и
                    // Стилизовать контейнер children
                    // Скорее всего
                    // ПОКА ЧТО СДЕЛАНО ТАК КАК НАПИСАНО ВЫШЕ
                        className={cls.content}
                    >
                        <i onClick={onOutsideClick} className={cls.closeIcon}>
                            &times;
                        </i>
                        {children}
                    </div>
                </div>
            }
        </>

    )
}