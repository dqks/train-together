import cls from "./Navbar.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { UserCard } from "../../../entities/User";
import { AppLink } from "../../../shared/ui/AppLink/AppLink.tsx";
import { AuthRoutePath } from "../../../shared/config/routeConfig/authRouteConfig.tsx";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <UserCard className={cls.userCard}/>
            <AppLink deleteUnderLine={true} to={AuthRoutePath.exercises}>Упражнения</AppLink>
            <AppLink deleteUnderLine={true} to={""}>Тренировки пользователей</AppLink>
            <AppLink deleteUnderLine={true} to={""}>Ваши тренировки</AppLink>
            <AppLink deleteUnderLine={true} to={""}>Выйти</AppLink>
        </div>
    )
}