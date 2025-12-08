import { useTranslation } from 'react-i18next';
import cls from './CollapseButton.module.scss';
import { TooltipElement } from '../../../../shared/ui/TooltipElement/TooltipElement.tsx';
import SidebarIcon from '../../../../shared/assets/icons/sidebar.svg?react';

interface CollapseButtonProps {
    collapseHandler: () => void;
}

export const CollapseButton = ({ collapseHandler } : CollapseButtonProps) => {
    const { t } = useTranslation();
    return (
        <TooltipElement tooltipText={t('Свернуть боковую панель')}>
            <SidebarIcon
                onClick={collapseHandler}
                className={cls.sidebarIcon}
            />
        </TooltipElement>
    );
};
