import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { type ChangeEvent, useCallback } from 'react';
import { Link, useNavigate } from 'react-router';
import cls from './RegisterForm.module.scss';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Button, SizeButton, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';
import { PublicRoutePath } from '@/shared/config/routeConfig/publicRouteConfig.tsx';
import { getRegisterEmail } from '../model/selectors/getRegisterEmail/getRegisterEmail.ts';
import { getRegisterPassword } from '../model/selectors/getRegisterPassword/getRegisterPassword.ts';
import { getRegisterNickname } from '../model/selectors/getRegisterNickname/getRegisterNickname.ts';
import { registerActions } from '../model/slice/registerSlice.ts';
import { registerByEmail } from '../model/services/registerByEmail/registerByEmail.ts';
import { getRegisterIsLoading } from '../model/selectors/getRegisterIsLoading/getRegisterIsLoading.ts';
import { getRegisterError } from '../model/selectors/getRegisterError/getRegisterError.ts';
import { ErrorMessage, TextSize } from '@/shared/ui/ErrorMessage/ErrorMessage.tsx';
import { getRegisterConsent } from '../model/selectors/getRegisterConsent/getRegisterConsent.ts';

export const RegisterForm = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email = useSelector(getRegisterEmail);
    const password = useSelector(getRegisterPassword);
    const nickname = useSelector(getRegisterNickname);
    const isLoading = useSelector(getRegisterIsLoading);
    const errors = useSelector(getRegisterError);
    const consent = useSelector(getRegisterConsent);

    const navigateToLogin = () => {
        navigate(PublicRoutePath.login);
    };

    const onChangeNickname = useCallback((value: string) => {
        dispatch(registerActions.setNickname(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(registerActions.setPassword(value));
    }, [dispatch]);

    const onChangeEmail = useCallback((value: string) => {
        dispatch(registerActions.setEmail(value));
    }, [dispatch]);

    const onChangeConsent = useCallback((value: ChangeEvent<HTMLInputElement>) => {
        dispatch(registerActions.setConsent(value.currentTarget.checked));
    }, [dispatch]);

    const onRegisterClick = () => {
        let hasErrors = false;

        const errors = {
            email: [''],
            password: [''],
            nickname: [''],
            consent: [''],
        };

        if (!email.trim()) {
            errors.email.push('Обязательное поле');
            hasErrors = true;
        }

        if (!password.trim()) {
            errors.password.push('Обязательное поле');
            hasErrors = true;
        }

        if (!nickname.trim()) {
            errors.nickname.push('Обязательное поле');
            hasErrors = true;
        }

        if (password.length < 6) {
            errors.password.push('Длина должна быть минимум 6 символов');
            hasErrors = true;
        }

        if (!email.includes('@') || !email.includes('.')) {
            errors.email.push('Почта должна быть валидной');
            hasErrors = true;
        }

        if (!consent) {
            errors.consent.push('Согласие обязательно');
            hasErrors = true;
        }

        if (hasErrors) {
            dispatch(registerActions.setErrors(errors));
            return;
        }

        dispatch(registerByEmail({
            email, nickname, password, navigateToLogin,
        }));
    };

    return (
        <div className={cls.LoginForm}>
            <Link to={PublicRoutePath.landing} className={cls.logo}>TrainTogether</Link>
            <div className={cls.authCard}>
                <h1 className={cls.authTitle}>{t('Авторизация')}</h1>
                <p className={cls.authSubtitle}>
                    {t('Войдите в свой аккаунт для доступа к программа')}
                </p>
                <form className={cls.authForm}>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">{t('Email')}</label>
                        <Input
                            onChange={onChangeEmail}
                            value={email}
                            id="email"
                            name="email"
                            type="email"
                            placeholder={t('Ваш email')}
                        />
                        <ErrorMessage messages={errors?.email} textSize={TextSize.SMALL} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">{t('Пароль')}</label>
                        <Input
                            value={password}
                            onChange={onChangePassword}
                            id="password"
                            name="password"
                            type="password"
                            placeholder={t('Ваш пароль')}
                        />
                        <p className={cls.inputDescription}>
                            {t('Пароль должен состоять минимум из 6 символов')}
                        </p>
                        <ErrorMessage messages={errors?.password} textSize={TextSize.SMALL} />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="nickname">{t('Никнейм')}</label>
                        <Input
                            onChange={onChangeNickname}
                            value={nickname}
                            id="nickname"
                            name="nickname"
                            type="text"
                            placeholder={t('Ваш никнейм')}
                        />
                        <p className={cls.inputDescription}>
                            {t('Никнейм может только состоять'
                                    + ' из алфавитных символов и цифр')}
                        </p>
                        <ErrorMessage messages={errors?.nickname} />
                    </div>
                    <div className="form-group">
                        {/* TODO: вынести в компонент Checkbox */}
                        <div className={cls.checkboxWrapper}>
                            <input
                                onChange={onChangeConsent}
                                checked={consent}
                                type="checkbox"
                                id="consent"
                                name="consent"
                            />
                            <label htmlFor="consent">{t('Согласие на обработку персональных данных')}</label>
                        </div>
                        <ErrorMessage messages={errors?.consent} />
                    </div>
                    <Button
                        disabled={isLoading}
                        size={SizeButton.LARGE}
                        theme={ThemeButton.PRIMARY}
                        type="button"
                        onClick={onRegisterClick}
                    >
                        {t('Войти')}
                    </Button>
                </form>
                <p className={cls.authFooterText}>
                    {t('Уже есть аккаунт? ')}
                    <AppLink className={cls.login} to={PublicRoutePath.login}>{t('Войдите')}</AppLink>
                </p>
            </div>
        </div>
    );
};
