import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import cls from './ProfilePage.module.scss';
import {
    fetchProfileInfo, getProfileInfo, UserCard, getIsLoading,
} from '@/entities/User';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { ProfileInfo } from './ProfleInfo/ProfileInfo';
import { useTabTitle } from '@/shared/lib/useTabTitle/useTabTitle.ts';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const profileInfo = useSelector(getProfileInfo);
    const isLoading = useSelector(getIsLoading);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(fetchProfileInfo(Number(params.id)));
    }, [dispatch]);

    useTabTitle(profileInfo?.nickname);

    if (isLoading) {
        return <PageLoader />;
    }

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            <UserCard
                name={profileInfo?.nickname}
                email={profileInfo?.email}
                programCount={profileInfo?.programCount}
                subscribeCount={100}
            />
            <ProfileInfo
                userId={profileInfo?.id}
                programCount={profileInfo?.programCount}
            />
        </div>
    );
};

export default ProfilePage;
