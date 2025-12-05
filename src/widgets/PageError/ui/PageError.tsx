import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames.ts';
import { Button } from '../../../shared/ui/Button/Button.tsx';

interface ErrorPageProps {
    className?: string;
}

export const PageError = ({ className } : ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1 className={cls.title}>
                {t('Произошла непредвиденная ошибка')}
            </h1>
            <Button
                onClick={reloadPage}
                className={cls.button}
            >
                {t('Перезагрузить страницу')}
            </Button>
        </div>
    );
};
