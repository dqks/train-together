import cls from './CollapseButton.module.scss';
import { TooltipElement } from '@/shared/ui/TooltipElement/TooltipElement.tsx';
import SidebarIconWhite from '../../../../shared/assets/icons/white-sidebar.svg?react';

interface CollapseButtonProps {
    collapseHandler: () => void;
    hasTooltip: boolean
    tooltipText?: string;
}

export const CollapseButton = ({
    collapseHandler,
    hasTooltip,
    tooltipText,
} : CollapseButtonProps) => (
    hasTooltip && tooltipText
        ? (
            <TooltipElement tooltipText={tooltipText}>
                <SidebarIconWhite
                    strokeWidth={2}
                    onClick={collapseHandler}
                    className={cls.sidebarIcon}
                />
            </TooltipElement>
        )
        : (
            <div className={cls.buttonWrapper}>
                <SidebarIconWhite
                    strokeWidth={2}
                    onClick={collapseHandler}
                    className={cls.sidebarIcon}
                />
            </div>
        )
);
