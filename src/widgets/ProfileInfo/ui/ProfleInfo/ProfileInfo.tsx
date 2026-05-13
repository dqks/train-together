import { useSearchParams } from 'react-router';
import cls from './ProfileInfo.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { ProfileTabs } from '@/features/ProfileTabs';
import { OverviewContent } from '../OverviewContent/OverviewContent.tsx';
import { ProgramsContent } from '../ProgramsContent/ProgramsContent.tsx';
import { RatingsContent } from '../RatingsContent/RatingsContent.tsx';

interface ProfileInfoProps {
    className?: string;
    programCount: number | undefined
}

export const ProfileInfo = (props : ProfileInfoProps) => {
    const [searchParams] = useSearchParams();
    const {
        className,
        programCount,
    } = props;
    const tab = searchParams.get('tab');

    return (
        <div className={classNames(cls.ProfileInfo, {}, [className])}>
            <ProfileTabs />
            {tab === 'overview' && <OverviewContent programCount={programCount} />}
            {tab === 'programs' && <ProgramsContent />}
            {tab === 'ratings' && <RatingsContent />}
        </div>
    );
};
