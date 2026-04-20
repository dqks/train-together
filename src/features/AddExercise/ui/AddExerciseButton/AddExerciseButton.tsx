import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import cls from './AddExerciseButton.module.scss';
import { TooltipElement } from '@/shared/ui/TooltipElement/TooltipElement.tsx';
import {
    SidePanelAddContentAsync,
} from '@/features/AddExercise/ui/SidePanelAddContent/SidePanelAddContent.async.tsx';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { SidePanelTriggerButton } from '@/shared/ui/SidePanelTriggerButton/SidePanelTriggerButton.tsx';
import { useOpen } from '@/shared/lib/useOpen/useOpen.tsx';

export const AddExerciseButton = () => {
    const { t } = useTranslation();

    const [isOpen, openHandler] = useOpen();

    return (
        <TooltipElement tooltipText={t('Добавить упражнение')}>
            <SidePanelTriggerButton
                isOpen={isOpen}
                openHandler={openHandler}
                buttonChildren="+"
                contentClassName={cls.sidePanelContent}
                sidePageChildren={(
                    <Suspense fallback={<PageLoader />}>
                        <SidePanelAddContentAsync
                            closeHandler={openHandler}
                            className={cls.sidePanelWrapper}
                        />
                    </Suspense>
                )}
            />
        </TooltipElement>
    );
};
