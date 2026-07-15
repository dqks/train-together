import type { ChangeEvent } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '../MuscleCard/MuscleCard.module.scss';
import type { MuscleCardProps } from '../../model/types/muscleSchema.ts';

interface SecondaryMuscleCardProps extends MuscleCardProps {
    onChange: (id: string) => void
    value: string
    values?: string[]
    id: number
}

export const SecondaryMuscleCard = ({
    className,
    name,
    value,
    onChange,
    id,
    values,
} : SecondaryMuscleCardProps) => {
    const onChangeMuscle = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.dataset.id as string);
    };

    const isChecked = values?.includes(id.toString());

    return (
        <div className={classNames(cls.SecondaryMuscleCard, {}, [className])}>
            <input
                type="checkbox"
                name="secondaryMuscleInline"
                value={value}
                id={value}
                className={cls.input}
                onChange={onChangeMuscle}
                data-id={id}
                checked={isChecked}
            />
            <label className={cls.label} htmlFor={value}>
                <span className={classNames(cls.span, {}, ['item-name'])}>{name}</span>
            </label>
        </div>
    );
};
