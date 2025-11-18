import cls from "./ProgramCategory.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { AppLink } from "../../../shared/ui/AppLink/AppLink.tsx";
import { useTranslation } from "react-i18next";

interface ProgramCategoryProps {
    className?: string;
}

export const ProgramCategory = ({className} : ProgramCategoryProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.ProgramCategory, {}, [className])}>
            <h2 className={cls.title}>{t("Просмотреть")}</h2>
            <AppLink deleteUnderLine={true} to="">
                {t("Главная")}
            </AppLink>
            <AppLink deleteUnderLine={true} to="">
                {t("Самые популярные")}
            </AppLink>
            <AppLink deleteUnderLine={true} to="">
                {t("С наивысшим рейтингом")}
            </AppLink>
            <AppLink deleteUnderLine={true} to="">
                {t("Новые")}
            </AppLink>
            <AppLink deleteUnderLine={true} to="">
                {t("Отслеживаемые")}
            </AppLink>
        </div>
    )
}