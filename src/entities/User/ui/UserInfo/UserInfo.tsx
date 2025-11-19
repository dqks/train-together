import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import cls from "./UserInfo.module.scss"
import userPicture from "../../../../shared/assets/images/userPicture.jpg"
import { Button } from "../../../../shared/ui/Button/Button.tsx";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Input } from "../../../../shared/ui/Input/Input.tsx";

interface UserInfoProps {
    className?: string;
}

export const UserInfo = ({className} : UserInfoProps) => {
    const { t } = useTranslation();
    const [editMode, setEditMode] = useState(false);

    const editHandler = () => {
        setEditMode((prev) => !prev)
    }

    return (
        <div className={classNames(cls.UserInfo, {}, [className])}>
            <img className={cls.avatar} alt="Avatar" src={userPicture}/>
            {
                editMode 
                ? <form>
                    <div className={cls.inputWrapper}>
                        <label htmlFor="nickname">Nick</label>
                        <Input type="text" name="nickname" id="nickname"/>
                    </div>
                    <div className={cls.buttonWrapper}>
                        <Button onClick={editHandler}>{t('Сохранить')}</Button>
                        <Button onClick={editHandler}>{t('Отменить')}</Button>
                    </div>
                </form>
                : <>
                    <h2 className={cls.nick}>Username</h2>
                    <Button onClick={editHandler} className={cls.editButton}>
                        {t("Редактировать профиль")}
                    </Button>
                </>
            }
        </div>
    )
}