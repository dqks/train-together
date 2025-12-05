import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../../shared/lib/classNames/classNames.ts';
import cls from './RegistrationButton.module.scss';
import { PublicRoutePath } from '../../../shared/config/routeConfig/publicRouteConfig.tsx';
import { Button } from '../../../shared/ui/Button/Button.tsx';

interface RegistrationButtonProps {
    className?: string;
}

export const RegistrationButton = ({ className } : RegistrationButtonProps) => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate(PublicRoutePath.registration);
    };

    return (
        <Button
            type="button"
            onClick={onButtonClick}
            className={classNames(cls.RegistrationButton, {}, [className])}
        >
            {t('Зарегистрироваться')}
        </Button>
    );
};
