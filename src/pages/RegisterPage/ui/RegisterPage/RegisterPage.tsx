import cls from './RegisterPage.module.scss';
import { classNames } from '../../../../shared/lib/classNames/classNames.ts';
import { RegisterForm } from '../../../../features/RegisterForm';

interface RegisterPageProps {
    className?: string;
}

const RegisterPage = ({ className } : RegisterPageProps) => (
    <div className={classNames(cls.RegisterPage, {}, [className])}>
        <RegisterForm />
    </div>
);

export default RegisterPage;
