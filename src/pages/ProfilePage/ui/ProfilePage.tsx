import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import cls from './ProfilePage.module.scss';
import { getUserEmail, getUserNickname, UserCard } from '@/entities/User';
import { ProfileInfo } from '@/widgets/ProfileInfo';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className } : ProfilePageProps) => {
    const nickname = useSelector(getUserNickname);
    const email = useSelector(getUserEmail);
    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            <UserCard name={nickname} email={email} programCount={3} subscribeCount={100} />
            <ProfileInfo />
        </div>
    );
};

export default ProfilePage;
