import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Hero.module.scss';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import BackArrow from '@/shared/assets/icons/backArrow.svg?react';

interface HeroProps {
    className?: string;
}

export const Hero = ({ className } : HeroProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Hero, {}, [className])}>
            <div className={cls.heroImage}>
                <img
                    className={cls.image}
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&amp;h=400&amp;fit=crop"
                    alt={t('Программа тренировок')}
                />
                <div className={cls.heroImageOverlay} />
            </div>
            <div className={cls.heroContent}>
                <Link className={cls.backLink} to={AuthRoutePath.programs}>
                    <BackArrow className={cls.backLinkSvg} />
                    Назад к программам
                </Link>
                <h1 className={cls.programTitle}>Название</h1>
                <div className={cls.programAuthor}>
                    <div className={cls.authorAvatar}>
                        <img
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&amp;h=400&amp;fit=crop"
                            alt="Аватарка пользователя"
                        />
                    </div>
                    <div className={cls.authorInfo}>
                        <span className={cls.authorName}>Имя</span>
                        <span className={cls.authorMeta}>
                            {t('Создано')}
                            {' '}
                            15 марта 2026
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
