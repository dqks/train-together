import cls from './AuthPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { Footer } from '@/shared/ui/Footer/Footer.tsx';
import { LoginForm } from '@/features/LoginForm/ui/LoginForm.tsx';


interface AuthPageProps {
    className?: string;
}



const LoginPage = ({ className }: AuthPageProps) => (
    <div className={classNames(cls.LoginPage, {}, [className])}>
            <LoginForm />
            <Footer />
    </div>
);

export default LoginPage;
