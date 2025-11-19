import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import cls from "./ProfilePage.module.scss"
import { useTranslation } from "react-i18next";
import { UserInfo } from "../../../entities/User/index.ts";
import { usePageTitle } from "../../../shared/lib/usePageTItle/usePageTitle.ts";

interface ProfilePageProps {
    className?: string;
}

export const ProfilePage = ({className} : ProfilePageProps) => {
    const { t } = useTranslation();
    usePageTitle("Профиль", t);

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            <UserInfo />
        </div>
    )
}