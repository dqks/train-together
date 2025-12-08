import { useTranslation } from 'react-i18next';
import cls from './FilterExerciseButton.module.scss';
import { FilterButton } from '../../../../features/FIlterButton';
import { SidePanelFilterContent } from '../SidePanelFilterContent/SidePanelFilterContent';
import { TooltipElement } from '../../../../shared/ui/TooltipElement/TooltipElement.tsx';
import { useModal } from '../../../../shared/lib/useModal/useModal.tsx';

export const FilterExerciseButton = () => {
    const { t } = useTranslation();
    const [isOpen, openHandler] = useModal();

    return (
        <TooltipElement tooltipText={t('Добавить фильтры')}>
            <FilterButton
                isOpen={isOpen}
                onOutsideClick={openHandler}
                contentClassName={cls.sidePanelContent}
                sidePageChildren={<SidePanelFilterContent />}
            />
        </TooltipElement>
    );
};
