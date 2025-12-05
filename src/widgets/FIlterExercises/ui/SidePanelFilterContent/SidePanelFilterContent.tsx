// import cls from "./SidePanelContent.module.scss"
import { useTranslation } from 'react-i18next';
import {
    EquipmentFilterList,
} from '../../../../features/EquipmentFIterList/EquipmentFilterList.tsx';
import { MuscleFilterList } from '../../../../features/MuscleFIlterList/MuscleFilterList.tsx';
import { Button } from '../../../../shared/ui/Button/Button.tsx';

// interface SidePanelFilterContentProps {
//     className?: string;
// }

export const SidePanelFilterContent = () => {
    const { t } = useTranslation();
    return (
        <>
            <h1>{t('Фильтры')}</h1>
            <p>
                {t('Мышцы')}
                :
            </p>
            <MuscleFilterList />
            <p>
                {t('Оборудование')}
                :
            </p>
            <EquipmentFilterList />
            <Button type="button">{t('Применить фильтры')}</Button>
        </>
    );
};
