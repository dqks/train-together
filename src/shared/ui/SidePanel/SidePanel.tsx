import React from 'react';
import cls from './SidePanel.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';
import { useOutsideClick } from '../../lib/useOutsideClick/useOutsideClick.tsx';

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
    const { componentRef } = useOutsideClick(onOutsideClick);

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
