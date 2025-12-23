import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { AddButtonSide } from '@/features/AddButtonSide';
import cls from './AddExerciseButton.module.scss';
import { TooltipElement } from '@/shared/ui/TooltipElement/TooltipElement.tsx';
import {
    SidePanelAddContentAsync,
} from '@/widgets/FIlterExercises/ui/SidePanelAddContent/SidePanelAddContent.async.tsx';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';

export const AddExerciseButton = () => {
    const { t } = useTranslation();
    return (
        <TooltipElement tooltipText={t('Добавить упражнение')}>
            <AddButtonSide
                contentClassName={cls.sidePanelContent}
                sidePageChildren={(
                    <Suspense fallback={<PageLoader />}>
                        <SidePanelAddContentAsync className={cls.sidePanelWrapper} />
                    </Suspense>
                )}
            />
        </TooltipElement>
    );
};
