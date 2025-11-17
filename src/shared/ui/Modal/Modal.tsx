import { classNames } from "../../lib/classNames/classNames";
import cls from "./Modal.module.scss"
import { type CSSProperties, useEffect, useRef } from "react";

type ModalProps = {
    children: React.ReactNode
    wrapperStyle?: CSSProperties
    onOutsideClick?: () => void;
    isOpen: boolean;
    contentClassName?: string;
}

export const Modal = ({children, 
    onOutsideClick, 
    isOpen,
    contentClassName
}: ModalProps) => {
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (onOutsideClick) {
            const clickHandler = (event: MouseEvent) => {
                if (componentRef.current && componentRef.current === event.target) {
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
                <div ref={componentRef}
                    className={cls.Modal}
                 >
                    <div 
                        className={classNames(cls.content, {}, [contentClassName])}
                    >
                        {children}
                    </div>
                </div>
            }
        </>

    )
}