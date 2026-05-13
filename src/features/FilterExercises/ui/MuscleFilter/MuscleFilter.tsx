import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import cls from './MuscleFilter.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { SidePanelTriggerButton } from '@/shared/ui/SidePanelTriggerButton/SidePanelTriggerButton.tsx';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { useOpen } from '@/shared/lib/useOpen/useOpen.tsx';
import { MuscleFilterContentAsync } from './MuscleFilterContent/MuscleFilterContent.async.tsx';

interface MuscleFilterProps {
    primaryMuscleId: string | undefined;
    setPrimaryMuscleId: (value: string) => void;
    onApplyFilters: () => void
}

export const MuscleFilter = ({ primaryMuscleId, setPrimaryMuscleId, onApplyFilters } : MuscleFilterProps) => {
    const { t } = useTranslation();
    const [isOpen, openHandler] = useOpen();

    const onApplyFilter = () => {
        onApplyFilters();
        openHandler();
    };

    const onChange = (value: string) => {
        setPrimaryMuscleId(value);
    };

    return (
        <SidePanelTriggerButton
            footerContent={(
                <Button
                    onClick={onApplyFilter}
                    type="button"
                    className={cls.applyButton}
                >
                    {t('Применить фильтр')}
                </Button>
            )}
            headerTitle={t('По мышцам')}
            isOpen={isOpen}
            themeButton={ThemeButton.OUTLINE}
            openHandler={openHandler}
            buttonChildren={t('По мышцам')}
        >
            <Suspense fallback={<PageLoader />}>
                <MuscleFilterContentAsync
                    value={primaryMuscleId}
                    onChange={onChange}
                />
            </Suspense>
        </SidePanelTriggerButton>
    );
};
