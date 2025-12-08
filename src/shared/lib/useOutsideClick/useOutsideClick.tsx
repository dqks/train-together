import { useEffect, useRef } from 'react';

export const useOutsideClick = (
    onOutsideClick: () => void,
    isOpen: boolean,
) => {
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const clickHandler = (event: MouseEvent) => {
            if (componentRef.current
                && componentRef.current === event.target) {
                onOutsideClick();
            }
        };
        const keydownHandler = (event: KeyboardEvent) => {
            if (event.code === 'Escape') {
                onOutsideClick();
            }
        };
        if (isOpen) {
            document.addEventListener('click', clickHandler);
            document.addEventListener('keydown', keydownHandler);
        }
        return () => {
            document.removeEventListener('click', clickHandler);
            document.removeEventListener('keydown', keydownHandler);
        };
    }, [onOutsideClick]);

    return { componentRef };
};
