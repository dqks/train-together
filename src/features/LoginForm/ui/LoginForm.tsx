import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import cls from './LoginForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { AppLink, LinkColor } from '@/shared/ui/AppLink/AppLink.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { PublicRoutePath } from '@/shared/config/routeConfig/publicRouteConfig.tsx';
import { getUserId } from '@/entities/User/model/selectors/getUserId.ts';
import { getLoginEmail } from '../model/selectors/getLoginEmail/getLoginEmail.ts';
import { loginByEmail } from '../model/services/loginByEmail/loginByEmail.ts';
import { getLoginIsLoading } from '../model/selectors/getLoginIsLoading/getLoginIsLoading.ts';
import { getLoginPassword } from '../model/selectors/getLoginPassword/getLoginPassword.ts';
import { loginActions } from '@/features/LoginForm/model/slice/loginSlice.ts';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const userId = useSelector(getUserId);

    useEffect(() => {
        if (userId) {
            navigate(AuthRoutePath.exercises);
        }
    }, [userId, navigate]);

    const onChangeEmail = useCallback((value: string) => {
        dispatch(loginActions.setEmail(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = () => {
        dispatch(loginByEmail({ email, password }));
    };

    return (
        <div className={classNames(cls.AuthForm, {}, [className])}>
            <h1 className={cls.title}>{t('Авторизация')}</h1>
            <div className={cls.inputWrapper}>
                <label htmlFor="email">{t('Email')}</label>
                <Input
                    onChange={onChangeEmail}
                    id="email"
                    name="email"
                    type="text"
                />
            </div>
            <div className={cls.inputWrapper}>
                <label htmlFor="password">{t('Пароль')}</label>
                <Input
                    onChange={onChangePassword}
                    id="password"
                    name="password"
                    type="password"
                />
            </div>
            <Button
                disabled={isLoading}
                type="button"
                onClick={onLoginClick}
                className={cls.authButton}
            >
                {t('Войти')}
            </Button>
            <div>
                <AppLink
                    linkColor={LinkColor.BLACK}
                    className={cls.link}
                    to=""
                >
                    {t('Забыли пароль?')}
                </AppLink>
                <p className={cls.createAccText}>
                    {t('Нет аккаунта? ')}
                    <AppLink
                        linkColor={LinkColor.BLACK}
                        className={cls.link}
                        to={PublicRoutePath.registration}
                    >
                        {t('Создайте')}
                    </AppLink>
                </p>
            </div>
        </div>
    );
};
