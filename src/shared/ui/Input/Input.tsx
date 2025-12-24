import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import cls from './Input.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    otherProps?: ReactNode;
    id: string;
    type: string;
    name: string;
    onChange?: (value: string) => void
    value?: string
}

export const Input = (props: InputProps) => {
    const {
        className,
        onChange,
        value,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            className={classNames(cls.Input, {}, [className])}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
        />
    );
};
