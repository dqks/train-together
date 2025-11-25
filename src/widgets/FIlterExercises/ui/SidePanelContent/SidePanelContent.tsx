// import cls from "./SidePanelContent.module.scss"
import { EquipmentFilterList } from "../../../../features/EquipmentFIterList/EquipmentFilterList.tsx";
import { MuscleFilterList } from "../../../../features/MuscleFIlterList/MuscleFilterList.tsx";
import { useTranslation } from "react-i18next";

interface SidePanelContentProps {
    className?: string;
}

export const SidePanelContent = ({} : SidePanelContentProps) => {
    const { t } = useTranslation();
    return (
        <>
            <h1>{t("Фильтры")}</h1>
            <p>{t("Мышцы")}:</p>     
            <MuscleFilterList />                  
            <p>{t("Оборудование")}:</p>
            <EquipmentFilterList />
    </>
    )
}