import cls from "./AuthForm.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Input } from "../../../shared/ui/Input/Input.tsx";
import { Button } from "../../../shared/ui/Button/Button.tsx";
import { AppLink, LinkColor } from "../../../shared/ui/AppLink/AppLink.tsx";
import { useNavigate } from "react-router";
import { AuthRoutePath }
    from "../../../shared/config/routeConfig/authRouteConfig.tsx";
import { useTranslation } from "react-i18next";

interface AuthFormProps {
    className?: string;
}

export const AuthForm = ({className}: AuthFormProps) => {
    const {t} = useTranslation();

    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate(AuthRoutePath.exercises)
    }

    return (
        <div className={classNames(cls.AuthForm, {}, [className])}>
            <h1 className={cls.title}>{t("Авторизация")}</h1>
            <div className={cls.inputWrapper}>
                <label htmlFor="email">{t("Email")}</label>
                <Input id="email" name="email" type="text"/>
            </div>
            <div className={cls.inputWrapper}>
                <label htmlFor="password">{t("Пароль")}</label>
                <Input id="password" name="password" type="password"/>
            </div>
            <Button onClick={onButtonClick} className={cls.authButton}>
                {t("Войти")}
            </Button>
            <div>
                <AppLink
                    linkColor={LinkColor.BLACK}
                    className={cls.link}
                    to={""}
                >
                    {t("Забыли пароль?")}
                </AppLink>
                <p className={cls.createAccText}>
                    {t("Нет аккаунта? ")}
                    <AppLink
                        linkColor={LinkColor.BLACK}
                        className={cls.link}
                        to={""}
                    >
                        {t("Создайте")}
                    </AppLink>
                </p>
            </div>
        </div>
    )
}