import { useTranslation } from 'react-i18next';
import { classNames } from '../../../shared/lib/classNames/classNames.ts';
import { Button } from '../../../shared/ui/Button/Button.tsx';
import cls from './SubscribeProgram.module.scss';

interface SubscribeProgramProps {
    className?: string;
}

export const SubscribeProgram = ({ className }: SubscribeProgramProps) => {
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.SubscribeProgram, {}, [className])}
        >
            <div className={cls.titleWrapper}>
                <h2>
                    {t('Подпишитесь, чтобы программа'
                        + ' отображалась в ваших подписках')}
                </h2>
            </div>
            <Button>{t('+ Подписаться')}</Button>
        </div>
    );
};
