import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './Text.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

interface TextProps {
    className?: string;
}

export const Text = memo(({ className } : TextProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Text, {}, [className])}>
            Text
        </div>
    );
});
