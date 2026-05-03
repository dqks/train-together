import { useTranslation } from 'react-i18next';
import cls from './Footer.module.scss';
import { Container } from '@/pages/LandingPage/ui/Container/Container.tsx';

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className={cls.Footer}>
            <Container>
                <div className={cls.footerInner}>
                    <p className={cls.footerText}>{t('© 2026 TrainTogether. Все права защищены.')}</p>
                    <div className={cls.footerLinks}>
                        <a href="#">{t('О проекте')}</a>
                        <a href="#">{t('Контакты')}</a>
                        <a href="#">{t('Политика конфиденциальности')}</a>
                    </div>
                </div>
            </Container>
        </footer>

    );
};
