import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import cls from './RegisterForm.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';
import { PublicRoutePath } from '@/shared/config/routeConfig/publicRouteConfig.tsx';
import { getRegisterEmail } from '../model/selectors/getRegisterEmail/getRegisterEmail.ts';
import { getRegisterPassword } from '../model/selectors/getRegisterPassword/getRegisterPassword.ts';
import { getRegisterNickname } from '../model/selectors/getRegisterNickname/getRegisterNickname.ts';
import { registerActions } from '../model/slice/registerSlice.ts';
import { registerByEmail } from '../model/services/registerByEmail/registerByEmail.ts';
import { getRegisterIsLoading } from '../model/selectors/getRegisterIsLoading/getRegisterIsLoading.ts';
import { getRegisterError } from '../model/selectors/getRegisterError/getRegisterError.ts';
import { ErrorMessage } from '@/shared/ui/ErrorMessage/ErrorMessage.tsx';

interface RegisterFormProps {
    className?: string;
}

export const RegisterForm = ({ className } : RegisterFormProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email = useSelector(getRegisterEmail);
    const password = useSelector(getRegisterPassword);
    const nickname = useSelector(getRegisterNickname);
    const isLoading = useSelector(getRegisterIsLoading);
    const errors = useSelector(getRegisterError);

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

    const onRegisterClick = () => {
        let hasErrors = false;

        const errors = {
            email: [''],
            password: [''],
            nickname: [''],
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

        if (hasErrors) {
            dispatch(registerActions.setErrors(errors));
            return;
        }

        dispatch(registerByEmail({
            email, nickname, password, navigateToLogin,
        }));
    };

    return (
        <div className={classNames(cls.RegisterForm, {}, [className])}>
            <p className={cls.accountExists}>
                {t('Уже есть аккаунт? ')}
                <AppLink className={cls.login} to={PublicRoutePath.login}>{t('Войдите')}</AppLink>
            </p>

            <div className={cls.inputWrapper}>
                <label htmlFor="email">{t('Email')}</label>
                <Input
                    onChange={onChangeEmail}
                    value={email}
                    id="email"
                    name="email"
                    type="text"
                />
                <ErrorMessage messages={errors?.email} />
            </div>
            <div className={cls.inputWrapper}>
                <label htmlFor="password">{t('Пароль')}</label>
                <Input
                    onChange={onChangePassword}
                    value={password}
                    id="password"
                    name="password"
                    type="password"
                />
                <p className={cls.inputDescription}>
                    {t('Пароль должен состоять минимум из 6 символов')}
                </p>
                <ErrorMessage messages={errors?.password} />
            </div>
            <div className={cls.inputWrapper}>
                <label htmlFor="nickname">{t('Никнейм')}</label>
                <Input
                    onChange={onChangeNickname}
                    value={nickname}
                    id="nickname"
                    name="nickname"
                    type="text"
                />
                <p className={cls.inputDescription}>
                    {t('Никнейм может только состоять'
                        + ' из алфавитных символов и цифр')}
                </p>
                <ErrorMessage messages={errors?.nickname} />
            </div>
            <Button
                disabled={isLoading}
                onClick={onRegisterClick}
                type="button"
            >
                {t('Создать аккаунт')}
            </Button>
        </div>
    );
};
