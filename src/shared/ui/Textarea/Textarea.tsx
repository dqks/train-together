import type { ChangeEvent, TextareaHTMLAttributes } from 'react';
import cls from './Textarea.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';

type HTMLTextAreaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>

interface TextareaProps extends HTMLTextAreaProps {
    className?: string;
    onChange?: (value: string) => void
    value: string
}

export const Textarea = (props : TextareaProps) => {
    const {
        className,
        onChange,
        value,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <textarea
            onChange={onChangeHandler}
            value={value}
            className={classNames(cls.Textarea, {}, [className])}
            {...otherProps}
        />
    );
};
