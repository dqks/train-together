import { useTranslation } from 'react-i18next';
import { Suspense, useState } from 'react';
import { useDispatch } from 'react-redux';
import cls from './MuscleFilter.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { SidePanelTriggerButton } from '@/shared/ui/SidePanelTriggerButton/SidePanelTriggerButton.tsx';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { useOpen } from '@/shared/lib/useOpen/useOpen.tsx';
import { MuscleFilterContentAsync } from './MuscleFilterContent/MuscleFilterContent.async.tsx';
import { fetchExerciseCards } from '@/entities/Exercise';

export const MuscleFilter = () => {
    const { t } = useTranslation();
    const [primaryMuscleId, setPrimaryMuscleId] = useState<string | undefined>(undefined);
    const [isOpen, openHandler] = useOpen();
    const dispatch = useDispatch();

    const onApply = () => {
        dispatch(fetchExerciseCards({ primaryMuscles: primaryMuscleId }));
        openHandler();
    };

    const onChange = (value: string) => {
        setPrimaryMuscleId(value);
    };

    return (
        <SidePanelTriggerButton
            footerContent={(
                <Button
                    onClick={onApply}
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
