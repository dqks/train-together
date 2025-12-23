import { useTranslation } from 'react-i18next';
import { AddButtonSide } from '@/features/AddButtonSide';
import cls from './AddExerciseButton.module.scss';
import { TooltipElement } from '@/shared/ui/TooltipElement/TooltipElement.tsx';
import {
    SidePanelAddContentAsync,
} from '@/widgets/FIlterExercises/ui/SidePanelAddContent/SidePanelAddContent.async.tsx';

export const AddExerciseButton = () => {
    const { t } = useTranslation();
    return (
        <TooltipElement tooltipText={t('Добавить упражнение')}>
            <AddButtonSide
                contentClassName={cls.sidePanelContent}
                sidePageChildren={<SidePanelAddContentAsync className={cls.sidePanelWrapper} />}
            />
        </TooltipElement>
    );
};

// (
//     <Suspense fallback={<PageLoader />}>
//         <SidePanelAddContentAsync className={cls.sidePanelWrapper} />
//     </Suspense>
// )
