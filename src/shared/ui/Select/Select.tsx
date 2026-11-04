import type { ChangeEvent, ReactNode, SelectHTMLAttributes } from 'react';
import cls from './Select.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'>

export type SelectTheme = 'primary' | 'ghost'

interface SelectProps extends HTMLSelectProps {
    className?: string;
    children: ReactNode
    onChange?: (value: string) => void;
    value?: string
    theme?: SelectTheme;
}

export const Select = (props: SelectProps) => {
    const {
        className,
        children,
        onChange,
        value,
        theme = 'primary',
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const additional = [className, theme && cls[theme]];

    return (
        <select
            {...props}
            onChange={onChangeHandler}
            value={value}
            className={classNames(cls.Select, {}, additional)}
        >
            {children}
        </select>
    );
};
