import cls from "./ProfileInfo.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { ProfileTabs } from "../../../../features/ProfileTabs";

interface ProfileInfoProps {
    className?: string;
}

export const ProfileInfo = ({className} : ProfileInfoProps) => {
    return (
        <div className={classNames(cls.ProfileInfo, {}, [className])}>
            <ProfileTabs/>
        </div>
    )
}