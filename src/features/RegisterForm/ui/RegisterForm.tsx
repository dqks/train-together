import cls from "./RegisterForm.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Input } from "../../../shared/ui/Input/Input.tsx";
import { useTranslation } from "react-i18next";
import { Button } from "../../../shared/ui/Button/Button.tsx";
import { AppLink } from "../../../shared/ui/AppLink/AppLink.tsx";
import { useNavigate } from "react-router";
import { AuthRoutePath } from "../../../shared/config/routeConfig/authRouteConfig.tsx";
import { PublicRoutePath } from "../../../shared/config/routeConfig/publicRouteConfig.tsx";

interface RegisterFormProps {
    className?: string;
}

export const RegisterForm = ({className} : RegisterFormProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate()

    const createHandler = () => {
        navigate(AuthRoutePath.my_profile)
    };

    return (
        <div className={classNames(cls.RegisterForm, {}, [className])}>
            <p className={cls.accountExists}>
                {t("Уже есть аккаунт? ")}
                <AppLink className={cls.login} to={PublicRoutePath.login}>{t("Войдите")}</AppLink>
            </p>
            <div className={cls.inputWrapper}>
                <label htmlFor="email">{t('Email')}</label>
                <Input id={"email"} name={"email"} type={"text"}/>
            </div>
            <div className={cls.inputWrapper}>
                <label htmlFor="password">{t('Пароль')}</label>
                <Input id={"password]"} name={"password"} type={"password"}/>
                <p className={cls.inputDescription}>
                    {t("Пароль должен состоять минимум из 15 символов ИЛИ " +
                        "хотябы из 8 символов, включающих число " +
                        "и строчные буквы")}
                </p>
            </div>
            <div className={cls.inputWrapper}>
                <label htmlFor="">{t('Никнейм')}</label>
                <Input id={"email"} name={"email"} type={"text"}/>
                <p className={cls.inputDescription}>
                    {t("Никнейм может только состоять" +
                        " из алфавитных символов и цифр")}
                </p>
            </div>
            <Button onClick={createHandler} type="submit">{t("Создать аккаунт")}</Button>
        </div>
    )
}