// import cls from "./SidePanelContent.module.scss"
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { PrimaryMuscleCardList } from '@/entities/Muscle';
import { EquipmentCardList } from '@/entities/Equipment';

// interface SidePanelFilterContentProps {
//     className?: string;
// }

const EquipmentFilterContent = () => {
    const { t } = useTranslation();
    return (
        <>
            <h1>{t('Фильтры')}</h1>
            <PrimaryMuscleCardList />
            <EquipmentCardList />
            <Button type="button">{t('Применить фильтры')}</Button>
        </>
    );
};

export default EquipmentFilterContent;
