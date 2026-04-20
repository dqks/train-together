import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import cls from './FilterExerciseButton.module.scss';
import { SidePanelFilterContentAsync } from '../SidePanelFilterContent/SidePanelFilterContent.async.tsx';
import { TooltipElement } from '@/shared/ui/TooltipElement/TooltipElement.tsx';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { SidePanelTriggerButton } from '@/shared/ui/SidePanelTriggerButton/SidePanelTriggerButton.tsx';
import Filter from '@/shared/assets/icons/Filter.svg?react';
import { useOpen } from '@/shared/lib/useOpen/useOpen.tsx';

export const FilterExerciseButton = () => {
    const { t } = useTranslation();
    const [isOpen, openHandler] = useOpen();

    return (
        <TooltipElement tooltipText={t('Добавить фильтры')}>
            <SidePanelTriggerButton
                isOpen={isOpen}
                openHandler={openHandler}
                buttonChildren={
                    <Filter stroke="purple" width={15} height={15} />
                }
                contentClassName={cls.sidePanelContent}
                sidePageChildren={(
                    <Suspense fallback={<PageLoader />}>
                        <SidePanelFilterContentAsync />
                    </Suspense>
                )}
            />
        </TooltipElement>
    );
};
