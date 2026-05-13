import type { ReactNode } from 'react';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { SidePanel } from '@/shared/ui/SidePanel/SidePanel.tsx';

interface SidePanelTriggerButtonProps {
    className?: string;
    children: ReactNode;
    buttonChildren: ReactNode;
    isOpen: boolean;
    openHandler: () => void;
    headerTitle: string
    themeButton?: ThemeButton
    footerContent: ReactNode
}

export const SidePanelTriggerButton = (props : SidePanelTriggerButtonProps) => {
    const {
        className,
        children,
        buttonChildren,
        openHandler,
        isOpen,
        themeButton,
        headerTitle,
        footerContent,
    } = props;

    return (
        <div className={className}>
            <Button theme={themeButton} type="button" onClick={openHandler}>
                { buttonChildren }
            </Button>
            <SidePanel
                footer={footerContent}
                headerTitle={headerTitle}
                onOutsideClick={openHandler}
                isOpen={isOpen}
            >
                {
                    children
                }
            </SidePanel>
        </div>
    );
};
