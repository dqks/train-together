import type { ReactNode } from 'react';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { SidePanel } from '@/shared/ui/SidePanel/SidePanel.tsx';

interface SidePanelTriggerButtonProps {
    className?: string;
    sidePageChildren: ReactNode;
    buttonChildren: ReactNode;
    isOpen: boolean;
    openHandler: () => void;
    contentClassName?: string;
}

export const SidePanelTriggerButton = (props : SidePanelTriggerButtonProps) => {
    const {
        className,
        sidePageChildren,
        buttonChildren,
        contentClassName,
        openHandler,
        isOpen,
    } = props;

    return (
        <div className={className}>
            <Button type="button" onClick={openHandler}>
                { buttonChildren }
            </Button>
            <SidePanel
                onOutsideClick={openHandler}
                isOpen={isOpen}
                contentClassName={contentClassName}
            >
                {
                    sidePageChildren
                }
            </SidePanel>
        </div>
    );
};
