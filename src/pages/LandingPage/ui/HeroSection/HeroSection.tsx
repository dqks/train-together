import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import cls from './HeroSection.module.scss';
import { Button, SizeButton } from '@/shared/ui/Button/Button.tsx';
import { PublicAppRoutes } from '@/shared/config/routeConfig/publicRouteConfig.tsx';

export const HeroSection = () => {
    const { t } = useTranslation();
    return (
        <section className={cls.Hero}>
            <div className="container">
                <h1 className={cls.heroTitle}>
                    {t('Создавайте и делитесь')}
                    <br />
                    {t('программами тренировок')}
                </h1>
                <p className={cls.heroSubtitle}>
                    {
                        t('Платформа для фитнес-энтузиастов. Создавайте'
                            + ' персональные программы, делитесь с сообществом и достигайте своих целей.')
                    }
                </p>
                <div className="flex gap-md justify-center">
                    <Link to={PublicAppRoutes.REGISTRATION}>
                        <Button size={SizeButton.LARGE} type="button">{t('Начать бесплатно')}</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
