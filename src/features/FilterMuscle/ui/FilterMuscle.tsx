import cls from "./FilterMuscle.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Button } from "../../../shared/ui/Button/Button.tsx";
import { useTranslation } from "react-i18next";

interface FilterMuscleProps {
    className?: string;
}

export const FilterMuscle = ({className} : FilterMuscleProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.FilterMuscle, {}, [className])}>
            <Button>{t("Мышцы")}</Button>
        </div>
    )
}