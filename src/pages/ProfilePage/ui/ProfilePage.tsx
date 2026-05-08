import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import cls from './ProfilePage.module.scss';
import { fetchProfileInfo, getProfileInfo, UserCard } from '@/entities/User';
import { ProfileInfo } from '@/widgets/ProfileInfo';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const profileInfo = useSelector(getProfileInfo);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(fetchProfileInfo(Number(params.id)));
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            <UserCard
                name={profileInfo?.nickname}
                email={profileInfo?.email}
                programCount={profileInfo?.programCount}
                subscribeCount={100}
            />
            <ProfileInfo programCount={profileInfo?.programCount} />
        </div>
    );
};

export default ProfilePage;
