import { useNavigate } from 'react-router';
import userPicture from '@/shared/assets/images/userPicture.jpg';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './UserCollapsedCard.module.scss';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';

interface UserCollapsedCardProps {
    className?: string;
}

export const UserCollapsedCard = ({ className } : UserCollapsedCardProps) => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(`${AuthRoutePath.my_profile}?tab=overview`);
    };

    return (
        <div
            onClick={clickHandler}
            className={classNames(cls.UserCollapsedCard, {}, [className])}
        >
            <img className={cls.picture} src={userPicture} alt="Картинка пользователя" />
        </div>
    );
};
