import cls from "./ProfileTabs.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { AppLink, LinkColor } from "../../../shared/ui/AppLink/AppLink.tsx";
import { useTranslation } from "react-i18next";

interface ProfileTabsProps {
    className?: string;
}

export const ProfileTabs = ({className} : ProfileTabsProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ProfileTabs, {}, [className])}>
            <AppLink linkColor={LinkColor.BLACK} to={""}>
                {t("Общее")}
            </AppLink>
            <AppLink linkColor={LinkColor.BLACK} to={""}>
                {t("Программы")}
            </AppLink>
            <AppLink linkColor={LinkColor.BLACK} to={""}>
                {t("Оценки")}
            </AppLink>
        </div>
    )
}