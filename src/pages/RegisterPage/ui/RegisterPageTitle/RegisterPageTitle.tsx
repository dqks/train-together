import { useTranslation } from 'react-i18next';
import cls from './RegisterPageTitle.module.scss';
import { classNames } from '../../../../shared/lib/classNames/classNames.ts';

interface RegisterPageTitleProps {
    className?: string;
}

export const RegisterPageTitle = ({ className } : RegisterPageTitleProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.RegisterPageTitle, {}, [className])}>
            <h1 className={cls.registrationTitle}>{t('Регистрация')}</h1>
        </div>
    );
};
