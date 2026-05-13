import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tag.module.scss';

export enum TagType {
    DEFAULT = '',
    PRIMARY = 'primary',
}

interface TagProps {
    className?: string;
    type?: TagType;
    name: string | undefined;
}

export const Tag = ({ className, type = TagType.DEFAULT, name } : TagProps) => (
    <span className={classNames(cls.Tag, {}, [className, cls[type]])}>
        {name}
    </span>
);
