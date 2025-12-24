import cls from './AuthPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { Footer } from '@/shared/ui/Footer/Footer.tsx';
import { LoginForm } from '@/features/LoginForm/ui/LoginForm.tsx';

interface AuthPageProps {
    className?: string;
}

const LoginPage = ({ className }: AuthPageProps) => (
    <div className={classNames(cls.AuthPage, {}, [className])}>
        <LoginForm className={cls.authForm} />
        <Footer />
    </div>
);

export default LoginPage;

// .AuthLayout {
//     height: calc(100vh - var(--footer-height));
//     margin: 0 auto;
// }
