import { useTranslation } from 'react-i18next';
import { classNames } from '../../../shared/lib/classNames/classNames.ts';
import cls from './ProfilePage.module.scss';
import { UserCard } from '../../../entities/User';
import { ProfileInfo } from '@/widgets/ProfileInfo';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className } : ProfilePageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            <UserCard name="Максим" email="maks@mail.com" programCount={3} subscribeCount={100} />
            <ProfileInfo />
        </div>
    );
};

export default ProfilePage;
