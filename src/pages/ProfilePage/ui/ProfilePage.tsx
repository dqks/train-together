import { useOutletContext } from "react-router";
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import cls from "./ProfilePage.module.scss"
import type { AppContextType } from "../../../app/layout/AppLayout/ui/AppLayout.tsx";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { UserInfo } from "../../../entities/User/index.ts";

interface ProfilePageProps {
    className?: string;
}

export const ProfilePage = ({className} : ProfilePageProps) => {
    const { t } = useTranslation();
    const { setTitle } : AppContextType = useOutletContext()

    useEffect(() => {
        setTitle(t('Профиль'))
    }, [setTitle, t])

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            <UserInfo />
        </div>
    )
}