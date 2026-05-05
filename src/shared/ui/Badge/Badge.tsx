// import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Badge.module.scss';

export enum BadgeType {
    DEFAULT = '',
    ACCENT = 'accent',
    POPULAR = 'popular'
}

interface BadgeProps {
    className?: string;
    text: string | undefined
    type?: BadgeType
}

export const Badge = (props : BadgeProps) => {
    // const { t } = useTranslation();
    const { className, text, type = BadgeType.DEFAULT } = props;

    return (
        <span
            className={classNames(cls.badge, {}, [className, cls[type]])}
        >

            {text}
        </span>
    );
};
