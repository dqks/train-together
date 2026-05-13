import React from 'react';
import cls from './SidePanel.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';
import { useOutsideClick } from '../../lib/useOutsideClick/useOutsideClick.tsx';
import { Portal } from '@/shared/ui/Portal/Portral.tsx';
import Cross from '@/shared/assets/icons/cross.svg?react';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';

interface SidePanelProps {
    isOpen: boolean;
    children: React.ReactNode;
    footer: React.ReactNode;
    onOutsideClick: () => void;
    headerTitle: string
}

export const SidePanel = (props : SidePanelProps) => {
    const {
        isOpen,
        children,
        onOutsideClick,
        headerTitle,
        footer,
    } = props;
    const { componentRef } = useOutsideClick(onOutsideClick, isOpen);

    // TODO порешать, убрав isOpen, но в таком случае пропсы замыкаются
    return isOpen && (
        <Portal>
            <div
                ref={componentRef}
                className={classNames(cls.SidePanel, { [cls.sidePanelOpen]: isOpen }, [])}
            >
                <div className={cls.sidePanelHeader}>
                    <h3>{headerTitle}</h3>
                    <Button
                        onClick={onOutsideClick}
                        type="button"
                        theme={ThemeButton.GHOST}
                    >
                        <Cross className={cls.cross} />
                    </Button>
                </div>
                <div className={cls.sidePanelContent}>
                    {children}
                </div>
                <div className={cls.sidePanelFooter}>
                    {footer}
                </div>
            </div>
            <div
                ref={componentRef}
                className={classNames(cls.sidePanelOverlay, { [cls.overlayActive]: isOpen }, [])}
            />
        </Portal>
    );
};
