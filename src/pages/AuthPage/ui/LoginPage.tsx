import cls from './AuthPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { Footer } from '@/shared/ui/Footer/Footer.tsx';
import { LoginForm } from '@/features/LoginForm/ui/LoginForm.tsx';
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { loginReducer } from '@/features/LoginForm';

interface AuthPageProps {
    className?: string;
}

const reducers: ReducerList = {
    login: loginReducer
}

const LoginPage = ({ className }: AuthPageProps) => (
    <div className={classNames(cls.LoginPage, {}, [className])}>
        <DynamicModuleLoader reducers={reducers}>
            <LoginForm />
            <Footer />
        </DynamicModuleLoader>
    </div>
);

export default LoginPage;
