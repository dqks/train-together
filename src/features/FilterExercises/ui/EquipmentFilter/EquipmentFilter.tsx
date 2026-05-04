import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import cls from './EquipmentFilter.module.scss';
import { ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { SidePanelTriggerButton } from '@/shared/ui/SidePanelTriggerButton/SidePanelTriggerButton.tsx';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { useOpen } from '@/shared/lib/useOpen/useOpen.tsx';
import { EquipmentFilterContentAsync } from './EquipmentFilterContent/EquipmentFilterContent.async.tsx';

export const EquipmentFilter = () => {
    const { t } = useTranslation();
    const [isOpen, openHandler] = useOpen();

    return (
        <SidePanelTriggerButton
            isOpen={isOpen}
            themeButton={ThemeButton.OUTLINE}
            openHandler={openHandler}
            buttonChildren={t('По оборудованию')}
            contentClassName={cls.sidePanelContent}
            sidePageChildren={(
                <Suspense fallback={<PageLoader />}>
                    <EquipmentFilterContentAsync />
                </Suspense>
            )}
        />
    );
};
