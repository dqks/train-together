import type { ChangeEvent } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MuscleCard.module.scss';

interface PrimaryMuscleCardProps {
    type: 'radio' | 'checkbox';
    className?: string;
    muscleName?: string
    inputName: string
    id: number;
    value?: string;
    values?: string | string[];
    onChange: (id: string) => void
}

export const MuscleCard = (props : PrimaryMuscleCardProps) => {
    const {
        className,
        muscleName,
        id,
        onChange,
        value,
        type,
        values,
        inputName,
    } = props;

    const onChangeMuscle = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.dataset.id as string);
    };

    let checked = false;

    if (Array.isArray(values)) {
        checked = values?.includes(id.toString());
    } else {
        checked = value === id.toString();
    }

    return (
        <div className={classNames(cls.MuscleCard, {}, [className])}>
            <input
                type={type}
                name={inputName}
                value={value}
                id={value}
                className={cls.input}
                data-id={id}
                onChange={onChangeMuscle}
                checked={checked}
            />
            <label className={cls.label} htmlFor={value}>
                <span className={classNames(cls.span, {}, ['item-name'])}>{muscleName}</span>
            </label>
        </div>
    );
};
