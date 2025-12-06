import { useEffect, useRef } from 'react';

export const useOutsideClick = (onOutsideClick: () => void) => {
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

    return { componentRef };
};
