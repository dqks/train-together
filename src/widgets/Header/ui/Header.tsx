import cls from "./Header.module.scss"
import { useNavigate } from "react-router";
import { AppLink } from "../../../shared/ui/AppLink/AppLink.tsx";
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Button } from "../../../shared/ui/Button/Button.tsx";
import { PublicRoutePath } from "../../../shared/config/routeConfig/publicRouteConfig.tsx";

interface NavbarProps {
    className?: string;
}

export const Header = ({className}: NavbarProps) => {
    const navigate = useNavigate()
    const onButtonClick = () => {
        navigate(PublicRoutePath.registration);
    }
    return (
        <div className={classNames(cls.Header, {}, [className])}>
            <div className={cls.item}>
                <AppLink to={""}>Упражнения</AppLink>
                <AppLink to={""}>Пользовательские тренировки</AppLink>
            </div>
            <div className={cls.item}>
                <AppLink to={""}>Войти</AppLink>
                <Button onClick={onButtonClick}>Зарегистрироваться</Button>
            </div>
        </div>
    )
}