import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import cls from './UserCard.module.scss';
import userPicture from '@/shared/assets/images/userPicture.jpg';
import {
    AuthRoutePath,
} from '@/shared/config/routeConfig/authRouteConfig.tsx';

interface UserCardProps {
    className?: string;
    name: string | null;
    // image?: string;
}

export const UserCard = ({ className, name } : UserCardProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(`${AuthRoutePath.my_profile}?tab=overview`);
    };

    return (
        <div
            onClick={clickHandler}
            className={classNames(cls.UserCard, {}, [className])}
        >
            <img className={cls.picture} src={userPicture} alt={t('Картинка пользователя')} />
            <p className={cls.userName}>{name}</p>
        </div>
    );
};
