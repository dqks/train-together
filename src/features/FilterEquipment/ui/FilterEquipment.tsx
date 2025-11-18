import cls from "./FilterEquipment.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Button } from "../../../shared/ui/Button/Button.tsx";
import { useTranslation } from "react-i18next";

interface FilterEquipmentProps {
    className?: string;
}

export const FilterEquipment = ({className} : FilterEquipmentProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.FilterEquipment, {}, [className])}>
            <Button>{t("Оборудование")}</Button>
        </div>
    )
}