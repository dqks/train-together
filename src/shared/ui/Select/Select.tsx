import type { ChangeEvent, ReactNode, SelectHTMLAttributes } from 'react';
import cls from './Select.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'>

interface SelectProps extends HTMLSelectProps {
    className?: string;
    children: ReactNode
    onChange: (value: string) => void;
    value: string
}

export const Select = (props: SelectProps) => {
    const {
        className,
        children,
        onChange,
        value,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <select
            {...props}
            onChange={onChangeHandler}
            value={value}
            className={classNames(cls.Select, {}, [className])}
        >
            {children}
        </select>
    );
};
