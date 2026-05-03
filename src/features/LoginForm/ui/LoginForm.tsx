import { Link, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import cls from './LoginForm.module.scss';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Button, SizeButton, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { PublicRoutePath } from '@/shared/config/routeConfig/publicRouteConfig.tsx';
import { getUserId } from '@/entities/User/model/selectors/getUserId/getUserId.ts';
import { getLoginEmail } from '../model/selectors/getLoginEmail/getLoginEmail.ts';
import { loginByEmail } from '../model/services/loginByEmail/loginByEmail.ts';
import { getLoginIsLoading } from '../model/selectors/getLoginIsLoading/getLoginIsLoading.ts';
import { getLoginPassword } from '../model/selectors/getLoginPassword/getLoginPassword.ts';
import { loginActions } from '../model/slice/loginSlice.ts';
import { getLoginError } from '../model/selectors/getLoginError/getLoginError.ts';
import { ErrorMessage, TextSize } from '@/shared/ui/ErrorMessage/ErrorMessage.tsx';

export const LoginForm = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email = useSelector(getLoginEmail);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const userId = useSelector(getUserId);
    const error = useSelector(getLoginError);

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
        let hasErrors = false;
        const errors = { status: [''] };

        if (!email.trim() || !password.trim()) {
            errors.status.push('Все поля должны быть заполнены');
            hasErrors = true;
        }

        if (!email.includes('@') || !email.includes('.')) {
            errors.status.push('Почта должна быть валидной');
            hasErrors = true;
        }

        if (hasErrors) {
            dispatch(loginActions.setError(errors));
            return;
        }

        dispatch(loginByEmail({ email, password }));
    };

    return (
        <div className={cls.LoginForm}>
            <Link to={PublicRoutePath.landing} className={cls.logo}>TrainTogether</Link>
            <div className={cls.authCard}>
                <h1 className={cls.authTitle}>{t('Авторизация')}</h1>
                <p className={cls.authSubtitle}>
                    {t('Войдите в свой аккаунт для доступа к программа')}
                    м
                </p>

                <form className={cls.authForm}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">{t('Email')}</label>
                        <Input
                            onChange={onChangeEmail}
                            value={email}
                            name="email"
                            type="email"
                            placeholder={t('Ваш email')}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">{t('Пароль')}</label>
                        <Input
                            value={password}
                            onChange={onChangePassword}
                            name="password"
                            type="password"
                            placeholder={t('Ваш пароль')}
                        />
                    </div>
                    <ErrorMessage messages={error?.status} textSize={TextSize.SMALL} />

                    <Button
                        disabled={isLoading}
                        size={SizeButton.LARGE}
                        theme={ThemeButton.PRIMARY}
                        type="button"
                        onClick={onLoginClick}
                    >
                        {t('Войти')}
                    </Button>

                </form>

                <p className={cls.authFooterText}>
                    {t('Нет аккаунта? ')}
                    <Link to={PublicRoutePath.registration}>{t('Зарегистрироваться')}</Link>
                </p>
            </div>
        </div>
    );
};
