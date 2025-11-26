// import cls from "./SidePanelContent.module.scss"
import { EquipmentFilterList } from "../../../../features/EquipmentFIterList/EquipmentFilterList.tsx";
import { MuscleFilterList } from "../../../../features/MuscleFIlterList/MuscleFilterList.tsx";
import { useTranslation } from "react-i18next";
import { Button } from "../../../../shared/ui/Button/Button.tsx";

interface SidePanelFilterContentProps {
    className?: string;
}

export const SidePanelFilterContent = ({} : SidePanelFilterContentProps) => {
    const { t } = useTranslation();
    return (
        <>
            <h1>{t("Фильтры")}</h1>
            <p>{t("Мышцы")}:</p>     
            <MuscleFilterList />                  
            <p>{t("Оборудование")}:</p>
            <EquipmentFilterList />
            <Button>{t("Применить фильтры")}</Button>
    </>
    )
}