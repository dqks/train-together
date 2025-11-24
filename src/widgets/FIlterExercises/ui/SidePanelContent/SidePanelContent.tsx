// import cls from "./SidePanelContent.module.scss"
import { FilterList } from "../FilterList/FilterList.tsx";
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
            <FilterList title={"Грудь"} muscles={[{
                    id: 1,
                    name: "Верхняя часть груди"
                }, {
                    id: 2,
                    name: "Средняя часть груди"
                }, {
                    id: 3,
                    name: "Нижняя часть груди"
                }]} 
            />                   
            <p>{t("Оборудование")}:</p>
    </>
    )
}