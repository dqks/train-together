import cls from "./Header.module.scss"
import { useNavigate } from "react-router";
import { AppLink } from "../../../shared/ui/AppLink/AppLink.tsx";
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Button } from "../../../shared/ui/Button/Button.tsx";
import { PublicRoutePath } from "../../../shared/config/routeConfig/publicRouteConfig.tsx";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "../../../features/LangSwitcher/ui/LangSwitcher.tsx";

interface NavbarProps {
    className?: string;
}

export const Header = ({className}: NavbarProps) => {
    const { t } = useTranslation()

    const navigate = useNavigate()
    const onButtonClick = () => {
        navigate(PublicRoutePath.registration);
    }

    return (
        <div className={classNames(cls.Header, {}, [className])}>
            <div className={cls.item}>
                <LangSwitcher />
                <AppLink to={""}>{t("Упражнения")}</AppLink>
                <AppLink to={""}>{t("Пользовательские тренировки")}</AppLink>
            </div>
            <div className={cls.item}>
                <AppLink to={""}>{t("Войти")}</AppLink>
                <Button onClick={onButtonClick}>{t("Зарегистрироваться")}</Button>
            </div>
        </div>
    )
}