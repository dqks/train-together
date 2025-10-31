import { classNames } from "../../../../shared/lib/classNames/classNames";
import cls from "./UserCard.module.scss"
import userPicture from "../../../../shared/assets/images/userPicture.jpg"

interface UserCardProps {
    className?: string;
}

export const UserCard = ({className} : UserCardProps) => {
    return (
        <div className={classNames(cls.UserCard, {}, [className])}>
            {/* <AppLink to={""}> */}
                <img className={cls.picture} src={userPicture} alt="Картинка пользователя" />
                <p>Username</p>
            {/* </AppLink> */}
        </div>
    )
}