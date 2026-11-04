import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import cls from './Input.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

type InputTheme = 'primary' | 'ghost'

interface InputProps extends HTMLInputProps {
    className?: string;
    otherProps?: ReactNode;
    id?: string;
    type: string;
    name?: string;
    onChange?: (value: string) => void
    value?: string
    theme?: InputTheme
}

export const Input = (props: InputProps) => {
    const {
        className,
        onChange,
        value,
        theme = 'primary',
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const additional = [className, theme && cls[theme]];

    return (
        <input
            className={classNames(cls.Input, {}, additional)}
            onChange={onChangeHandler}
            value={value}
            {...otherProps}
        />
    );
};
