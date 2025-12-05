import React, { useEffect, useRef } from 'react';
import cls from './SidePanel.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';

interface SidePanelProps {
    contentClassName?: string;
    isOpen: boolean;
    children: React.ReactNode;
    onOutsideClick: () => void;
}

export const SidePanel = ({
    contentClassName,
    isOpen,
    children,
    onOutsideClick,
} : SidePanelProps) => {
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
                        className={cls.SidePanel}
                    >
                        <div
                            className={classNames(
                                cls.content,
                                {},
                                [contentClassName],
                            )}
                        >
                            <i onClick={onOutsideClick} className={cls.closeIcon}>&times;</i>
                            {children}
                        </div>
                    </div>
                );
};
