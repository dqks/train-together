import { useTranslation } from 'react-i18next';
import { Suspense, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router';
import cls from './EquipmentFilter.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { SidePanelTriggerButton } from '@/shared/ui/SidePanelTriggerButton/SidePanelTriggerButton.tsx';
import { useOpen } from '@/shared/lib/useOpen/useOpen.tsx';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import {
    EquipmentFilterContentAsync,
} from '@/features/FilterExercises/ui/EquipmentFilter/EquipmentFilterContent/EquipmentFilterContent.async.tsx';
import { fetchExerciseCards } from '@/entities/Exercise';

export const EquipmentFilter = () => {
    const { t } = useTranslation();
    const [isOpen, openHandler] = useOpen();
    const [equipmentId, setEquipmentId] = useState<string | undefined>(undefined);
    const dispatch = useDispatch();
    const [_, setSearchParams] = useSearchParams();

    const onApplyFilter = useCallback(() => {
        if (equipmentId) {
            setSearchParams({ equipmentId });
            dispatch(fetchExerciseCards({ equipmentId }));
        }
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
