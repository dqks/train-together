import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
    message: string;
}

export const NotFound = ({ className, message } : NotFoundProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.notFoundWrapper, {}, [className])}>
            <h1 className={cls.notFound}>{t(message)}</h1>
        </div>
    );
};
