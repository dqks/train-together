import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import cls from "./UserInfo.module.scss"
import userPicture from "../../../../shared/assets/images/userPicture.jpg"
import { Button } from "../../../../shared/ui/Button/Button.tsx";
import { useTranslation } from "react-i18next";

interface UserInfoProps {
    className?: string;
}

export const UserInfo = ({className} : UserInfoProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.UserInfo, {}, [className])}>
            <img className={cls.avatar} alt="Avatar" src={userPicture}/>
            <h2 className={cls.nick}>Username</h2>
            <Button className={cls.editButton}>{t("Редактировать профиль")}</Button>
        </div>
    )
}