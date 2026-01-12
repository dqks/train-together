import type { ReactNode } from 'react';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { SidePanel } from '@/shared/ui/SidePanel/SidePanel.tsx';
import { useOpen } from '@/shared/lib/useOpen/useOpen.tsx';

interface SidePanelTriggerButtonProps {
    className?: string;
    sidePageChildren: ReactNode;
    buttonChildren: ReactNode;
    // isOpen: boolean;
    // onOutsideClick: () => void;
    contentClassName?: string;
}

export const SidePanelTriggerButton = ({
    className,
    sidePageChildren,
    buttonChildren,
    contentClassName,
} : SidePanelTriggerButtonProps) => {
    const [isOpen, openHandler] = useOpen();

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
