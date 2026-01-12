// import cls from "./SidePanelContent.module.scss"
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { MuscleFilterList } from '@/entities/Muscle';
import { EquipmentFilterList } from '@/entities/Equipment';

// interface SidePanelFilterContentProps {
//     className?: string;
// }

const SidePanelFilterContent = () => {
    const { t } = useTranslation();
    return (
        <>
            <h1>{t('Фильтры')}</h1>
            <MuscleFilterList />
            <EquipmentFilterList />
            <Button type="button">{t('Применить фильтры')}</Button>
        </>
    );
};

export default SidePanelFilterContent;
