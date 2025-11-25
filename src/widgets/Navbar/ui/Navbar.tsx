import cls from "./Navbar.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { UserCard } from "../../../entities/User";
import { AppLink } from "../../../shared/ui/AppLink/AppLink.tsx";
import { AuthRoutePath }
    from "../../../shared/config/routeConfig/authRouteConfig.tsx";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "../../../features/LangSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.content}>
                <UserCard className={cls.userCard}/>
                <AppLink deleteUnderLine={true} to={AuthRoutePath.exercises}>
                    {t("Упражнения")}
                </AppLink>
                <AppLink deleteUnderLine={true} to={AuthRoutePath.programs}>
                    {t("Программы пользователей")}
                </AppLink>
                <AppLink deleteUnderLine={true} to={AuthRoutePath.my_programs}>
                    {t("Ваши программы")}</AppLink>
                <AppLink deleteUnderLine={true} to={""}>
                    {t("Выйти")}
                </AppLink>
                <LangSwitcher className={cls.changeLang}/>
            </div>
        </div>
    )
}