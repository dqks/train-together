import cls from "./AuthForm.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Input } from "../../../shared/ui/Input/Input.tsx";
import { Button } from "../../../shared/ui/Button/Button.tsx";
import { AppLink } from "../../../shared/ui/AppLink/AppLink.tsx";

interface AuthFormProps {
    className?: string;
}

export const AuthForm = ({className} : AuthFormProps) => {
    return (
        <div className={classNames(cls.AuthForm, {}, [className])}>
            <h1 className={cls.title}>Авторизация</h1>
            <div className={cls.inputWrapper}>
                <label htmlFor="email">Email</label>
                <Input id="email" name="email" type="text"/>
            </div>
            <div className={cls.inputWrapper}>
                <label htmlFor="password">Пароль</label>
                <Input id="password" name="password" type="password"/>
            </div>
            <Button className={cls.authButton}>Войти</Button>
            <div>
                <AppLink className={cls.link} to={""}>Забыли пароль?</AppLink>
                <p className={cls.createAccText}>Нет аккаунта? <AppLink className={cls.link} to={""}>Создайте</AppLink></p>
            </div>
        </div>
    )
}