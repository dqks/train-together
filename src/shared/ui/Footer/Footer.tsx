import cls from './Footer.module.scss';
import { Container } from '@/pages/LandingPage/ui/Container/Container.tsx';

interface FooterProps {
    className?: string;
}

export const Footer = ({ className } : FooterProps) => (
    <footer className={cls.Footer}>
        <Container>
            <div className={cls.footerInner}>
                <p className={cls.footerText}>© 2026 TrainTogether. Все права защищены.</p>
                <div className={cls.footerLinks}>
                    <a href="#">О проекте</a>
                    <a href="#">Контакты</a>
                    <a href="#">Политика конфиденциальности</a>
                </div>
            </div>
        </Container>
    </footer>

);
