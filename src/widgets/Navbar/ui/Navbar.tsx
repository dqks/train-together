import cls from "./Navbar.module.scss"
import { useNavigate } from "react-router";
import { AppLink } from "../../../shared/ui/AppLink/AppLink.tsx";
import { RoutePath } from "../../../shared/config/routeConfig/routeConfig.tsx";
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Button } from "../../../shared/ui/Button/Button.tsx";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const navigate = useNavigate()
    const onButtonClick = () => {
        navigate(RoutePath.registration);
    }
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
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