import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import cls from './AddExerciseButton.module.scss';
import { TooltipElement } from '@/shared/ui/TooltipElement/TooltipElement.tsx';
import {
    SidePanelAddContentAsync,
} from '@/widgets/ExercisesControl/ui/SidePanelAddContent/SidePanelAddContent.async.tsx';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { SidePanelTriggerButton } from '@/shared/ui/SidePanelTriggerButton/SidePanelTriggerButton.tsx';

export const AddExerciseButton = () => {
    const { t } = useTranslation();
    return (
        <TooltipElement tooltipText={t('Добавить упражнение')}>
            <SidePanelTriggerButton
                buttonChildren="+"
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
