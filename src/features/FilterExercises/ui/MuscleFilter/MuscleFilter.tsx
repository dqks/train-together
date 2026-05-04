import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import cls from './MuscleFilter.module.scss';
import { ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { SidePanelTriggerButton } from '@/shared/ui/SidePanelTriggerButton/SidePanelTriggerButton.tsx';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { useOpen } from '@/shared/lib/useOpen/useOpen.tsx';
import { MuscleFilterContentAsync } from './MuscleFilterContent/MuscleFilterContent.async.tsx';

export const MuscleFilter = () => {
    const { t } = useTranslation();
    const [isOpen, openHandler] = useOpen();

    return (
        <SidePanelTriggerButton
            isOpen={isOpen}
            themeButton={ThemeButton.OUTLINE}
            openHandler={openHandler}
            buttonChildren={t('По мышцам')}
            contentClassName={cls.sidePanelContent}
            sidePageChildren={(
                <Suspense fallback={<PageLoader />}>
                    <MuscleFilterContentAsync />
                </Suspense>
            )}
        />
    );
};
