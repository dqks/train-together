import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CenterText.module.scss';

interface CenterTextProps {
    className?: string;
    text: string;
    subText?: string;
}

export const CenterText = ({ className, text, subText } : CenterTextProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.CenterText, {}, [className])}>
            <h1 className={cls.text}>{t(text)}</h1>
            {subText && <p className={cls.subText}>{subText}</p>}
        </div>
    );
};
