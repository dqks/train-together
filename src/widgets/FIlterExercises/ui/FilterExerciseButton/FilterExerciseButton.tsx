import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import cls from './FilterExerciseButton.module.scss';
import { FilterButton } from '@/features/FIlterButton';
import {
    SidePanelFilterContentAsync,
} from '../SidePanelFilterContent/SidePanelFilterContent.async.tsx';
import { TooltipElement } from '@/shared/ui/TooltipElement/TooltipElement.tsx';
import { useOpen } from '@/shared/lib/useOpen/useOpen.tsx';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';

export const FilterExerciseButton = () => {
    const { t } = useTranslation();
    const [isOpen, openHandler] = useOpen();

    return (
        <TooltipElement tooltipText={t('Добавить фильтры')}>
            <FilterButton
                isOpen={isOpen}
                onOutsideClick={openHandler}
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
