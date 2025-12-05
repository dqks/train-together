import type { HTMLProps } from 'react';
import cls from './Textarea.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';

interface TextareaProps extends HTMLProps<HTMLTextAreaElement> {
    className?: string;
}

export const Textarea = (props : TextareaProps) => {
    const {
        className,
        ...otherProps
    } = props;

    return (
        <textarea
            className={classNames(cls.Textarea, {}, [className])}
            {...otherProps}
        />
    );
};
