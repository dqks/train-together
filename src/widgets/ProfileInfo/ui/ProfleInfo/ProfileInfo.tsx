import cls from "./ProfileInfo.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { ProfileTabs } from "../../../../features/ProfileTabs";
import { useSearchParams } from "react-router";
import { OverviewContent } from "../OverviewContent/OverviewContent.tsx";
import { ProgramsContent } from "../ProgramsContent/ProgramsContent.tsx";
import { RatingsContent } from "../RatingsContent/RatingsContent.tsx";

interface ProfileInfoProps {
    className?: string;
}

export const ProfileInfo = ({className} : ProfileInfoProps) => {
    const [searchParams] = useSearchParams();
    const tab = searchParams.get("tab");

    return (
        <div className={classNames(cls.ProfileInfo, {}, [className])}>
            <ProfileTabs/>
            {tab === 'overview' && <OverviewContent />}
            {tab === 'programs' && <ProgramsContent />}
            {tab === 'ratings' && <RatingsContent />}
        </div>
    )
}