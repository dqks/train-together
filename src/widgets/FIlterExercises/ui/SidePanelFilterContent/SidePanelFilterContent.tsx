// import cls from "./SidePanelContent.module.scss"
import { useTranslation } from 'react-i18next';
import {
    EquipmentFilterList,
} from '@/features/EquipmentFIterList/ui/EquipmentFilterList.tsx';
import { MuscleFilterList } from '@/features/MuscleFIlterList/ui/MuscleFilterList.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';

// interface SidePanelFilterContentProps {
//     className?: string;
// }

const SidePanelFilterContent = () => {
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

export default SidePanelFilterContent;
