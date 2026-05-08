import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import cls from './Footer.module.scss';
import { Container } from '@/pages/LandingPage/ui/Container/Container.tsx';
import { PublicRoutePath } from '@/shared/config/routeConfig/publicRouteConfig.tsx';

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className={cls.Footer}>
            <Container>
                <div className={cls.footerInner}>
                    <p className={cls.footerText}>{t('© 2026 TrainTogether. Все права защищены.')}</p>
                    <div className={cls.footerLinks}>
                        <Link to={PublicRoutePath.landing}>{t('О проекте')}</Link>
                        <Link to="/">{t('Контакты')}</Link>
                        <Link to="/">{t('Политика конфиденциальности')}</Link>
                    </div>
                </div>
            </Container>
        </footer>

    );
};
