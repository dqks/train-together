import { classNames } from "../../../../shared/lib/classNames/classNames";
import cls from "./UserCard.module.scss"
import userPicture from "../../../../shared/assets/images/userPicture.jpg"
// import { AppLink } from "../../../../shared/ui/AppLink/AppLink"; TODO
import { AuthRoutePath }
    from "../../../../shared/config/routeConfig/authRouteConfig";
import { useNavigate } from "react-router";

interface UserCardProps {
    className?: string;
    name?: string;
    image?: string;
}

export const UserCard = ({className} : UserCardProps) => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(AuthRoutePath.my_profile);
    }

    return (
        <div 
            onClick={clickHandler} 
            className={classNames(cls.UserCard, {}, [className])}
        >
            <img className={cls.picture} src={userPicture} alt="Картинка пользователя" />
            <p className={cls.userName}>Username</p>
        </div>
    )
}