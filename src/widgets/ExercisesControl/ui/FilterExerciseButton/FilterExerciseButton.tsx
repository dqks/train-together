import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import cls from './FilterExerciseButton.module.scss';
import { SidePanelFilterContentAsync } from '../SidePanelFilterContent/SidePanelFilterContent.async.tsx';
import { TooltipElement } from '@/shared/ui/TooltipElement/TooltipElement.tsx';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { SidePanelTriggerButton } from '@/shared/ui/SidePanelTriggerButton/SidePanelTriggerButton.tsx';
import Filter from '@/shared/assets/icons/Filter.svg?react';

export const FilterExerciseButton = () => {
    const { t } = useTranslation();

    return (
        <TooltipElement tooltipText={t('Добавить фильтры')}>
            <SidePanelTriggerButton
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
