import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import cls from './UserCard.module.scss';
import userPicture from '@/shared/assets/images/userPicture.jpg';

interface UserCardProps {
    className?: string;
    name: string | undefined;
    email: string | undefined;
    programCount: number | undefined;
    subscribeCount: number | undefined;
    image?: string;
}

export const UserCard = (props: UserCardProps) => {
    const { t } = useTranslation();

    const {
        className,
        name,
        image,
        email,
        programCount,
        subscribeCount,
    } = props;

    return (
        <div
            className={classNames(cls.UserCard, {}, [className])}
        >
            <div className={cls.avatarWrapper}>
                <img className={cls.avatar} src={userPicture} alt={t('Картинка пользователя')} />
            </div>
            <div className={cls.info}>
                <h1 className={cls.name}>{name}</h1>
                <p className={cls.email}>{email}</p>
                <div className={cls.stats}>
                    <div className={cls.stat}>
                        <span className={cls.statValue}>{programCount}</span>
                        <span className={cls.statLabel}>{t('Программы')}</span>
                    </div>
                    {/* <div className="stat"> */}
                    {/*    <span className="stat-value">12</span> */}
                    {/*    <span className="stat-label">Подписчики</span> */}
                    {/* </div> */}
                    <div className={cls.stat}>
                        <span className={cls.statValue}>{subscribeCount}</span>
                        <span className={cls.statLabel}>{t('Подписки')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
