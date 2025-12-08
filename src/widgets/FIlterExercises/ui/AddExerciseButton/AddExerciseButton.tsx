import { useTranslation } from 'react-i18next';
import { AddButtonSide } from '../../../../features/AddButtonSide';
import { SidePanelAddContent } from '../SidePanelAddContent/SidePanelAddContent.tsx';
import cls from './AddExerciseButton.module.scss';
import { TooltipElement } from '../../../../shared/ui/TooltipElement/TooltipElement.tsx';

export const AddExerciseButton = () => {
    const { t } = useTranslation();
    return (
        <TooltipElement tooltipText={t('Добавить упражнение')}>
            <AddButtonSide
                contentClassName={cls.sidePanelContent}
                sidePageChildren={<SidePanelAddContent className={cls.sidePanelWrapper} />}
            />
        </TooltipElement>

    );
};
