import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Hero.module.scss';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import BackArrow from '@/shared/assets/icons/backArrow.svg?react';
import { serverUrl } from '@/shared/const/serverUrl.ts';
import userPicture from '@/shared/assets/images/userPicture.jpg';

interface HeroProps {
    className?: string;
    programName: string | undefined;
    authorName: string | undefined;
    imageUrl: string | undefined;
    formattedDate: string | undefined;
    authorImage: string | undefined
}

export const Hero = (props : HeroProps) => {
    const { t } = useTranslation();
    const {
        className,
        programName,
        authorName,
        imageUrl,
        formattedDate,
        authorImage,

    } = props;
    return (
        <div className={classNames(cls.Hero, {}, [className])}>
            <div className={cls.heroImage}>
                <img
                    className={cls.image}
                    src={serverUrl + imageUrl}
                    alt={t('Программа тренировок')}
                />
                <div className={cls.heroImageOverlay} />
            </div>
            <div className={cls.heroContent}>
                <Link className={cls.backLink} to={AuthRoutePath.programs}>
                    <BackArrow className={cls.backLinkSvg} />
                    Назад к программам
                </Link>
                <h1 className={cls.programTitle}>{programName}</h1>
                <div className={cls.programAuthor}>
                    <div className={cls.authorAvatar}>
                        <img
                            src={authorImage ? serverUrl + authorImage : userPicture}
                            alt="Аватарка пользователя"
                        />
                    </div>
                    <div className={cls.authorInfo}>
                        <span className={cls.authorName}>{authorName}</span>
                        <span className={cls.authorMeta}>
                            {t('Создано')}
                            {' '}
                            {formattedDate}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
