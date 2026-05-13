import { useTranslation } from 'react-i18next';
import { Suspense, useCallback } from 'react';
import cls from './EquipmentFilter.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { SidePanelTriggerButton } from '@/shared/ui/SidePanelTriggerButton/SidePanelTriggerButton.tsx';
import { useOpen } from '@/shared/lib/useOpen/useOpen.tsx';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { EquipmentFilterContentAsync } from './EquipmentFilterContent/EquipmentFilterContent.async.tsx';

interface EquipmentFilterProps {
    equipmentId: string | undefined;
    setEquipmentId: (value: string) => void;
    onApplyFilters: () => void
}

export const EquipmentFilter = ({ equipmentId, setEquipmentId, onApplyFilters }: EquipmentFilterProps) => {
    const { t } = useTranslation();
    const [isOpen, openHandler] = useOpen();

    const onApplyFilter = useCallback(() => {
        onApplyFilters();
        openHandler();
    }, [equipmentId]);

    const onChange = (value: string) => {
        setEquipmentId(value);
    };

    return (
        <SidePanelTriggerButton
            isOpen={isOpen}
            footerContent={(
                <Button
                    onClick={onApplyFilter}
                    className={cls.applyButton}
                    type="button"
                >
                    {t('Применить фильтры')}
                </Button>
            )}
            themeButton={ThemeButton.OUTLINE}
            openHandler={openHandler}
            headerTitle={t('По оборудованию')}
            buttonChildren={t('По оборудованию')}
        >
            <Suspense fallback={<PageLoader />}>
                <EquipmentFilterContentAsync
                    value={equipmentId}
                    onChange={onChange}
                />
            </Suspense>
        </SidePanelTriggerButton>
    );
};
