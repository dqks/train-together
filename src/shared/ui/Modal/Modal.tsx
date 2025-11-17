import { classNames } from "../../lib/classNames/classNames";
import cls from "./Modal.module.scss"
import { type CSSProperties, useEffect, useRef } from "react";

type ModalProps = {
    children: React.ReactNode
    wrapperStyle?: CSSProperties
    contentStyle?: CSSProperties
    onOutsideClick?: () => void;
    isOpen: boolean;
    className?: string;
}

export const Modal = ({children, 
    wrapperStyle, 
    contentStyle, 
    onOutsideClick, 
    isOpen,
    className
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
                    style={wrapperStyle} 
                    className={classNames(cls.Modal, {}, [className])}
                 >
                    <div style={contentStyle} className={cls.content}>
                        {children}
                    </div>
                </div>
            }
        </>

    )
}