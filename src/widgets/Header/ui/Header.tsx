import cls from "./Header.module.scss"
import { AppLink } from "../../../shared/ui/AppLink/AppLink.tsx";
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { PublicAppRoutes }
    from "../../../shared/config/routeConfig/publicRouteConfig.tsx";
import { useTranslation } from "react-i18next";
import { LangSwitcher }
    from "../../../features/LangSwitcher";
import { RegistrationButton } from "../../../features/RegistrationButton/index.ts";

interface NavbarProps {
    className?: string;
}

export const Header = ({className}: NavbarProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.Header, {}, [className])}>
            <div className={cls.item}>
                <LangSwitcher />
                <AppLink to={""}>{t("Упражнения")}</AppLink>
                <AppLink to={""}>{t("Пользовательские тренировки")}</AppLink>
            </div>
            <div className={cls.item}>
                <AppLink to={PublicAppRoutes.LOGIN}>{t("Войти")}</AppLink>
                <RegistrationButton />
            </div>
        </div>
    )
}