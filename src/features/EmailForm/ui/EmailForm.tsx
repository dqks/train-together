import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../../shared/lib/classNames/classNames';
import cls from './EmailForm.module.scss';
import { Button } from '../../../shared/ui/Button/Button.tsx';
import { Input } from '../../../shared/ui/Input/Input.tsx';
import {
    PublicRoutePath,
} from '../../../shared/config/routeConfig/publicRouteConfig.tsx';

interface EmailFormProps {
    className?: string;
}

export const EmailForm = ({ className } : EmailFormProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const onButtonClick = () => {
        navigate(PublicRoutePath.registration);
    };
    return (
        <div className={classNames(cls.EmailForm, {}, [className])}>
            <Input id="email" name="email" type="text" />
            <Button
                type="button"
                onClick={onButtonClick}
                className={cls.button}
            >
                {t('Зарегистрироваться')}
            </Button>
        </div>
    );
};
