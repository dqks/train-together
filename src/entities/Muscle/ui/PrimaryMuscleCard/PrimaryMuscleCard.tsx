import type { ChangeEvent } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '../MuscleCard/MuscleCard.module.scss';

interface PrimaryMuscleCardProps {
    className?: string;
    name?: string | undefined
    id: number | undefined
    selectedMuscle?: string;
    onChange: (value: string) => void
}

export const PrimaryMuscleCard = (props : PrimaryMuscleCardProps) => {
    const {
        className,
        name,
        id,
        onChange,
        selectedMuscle,
    } = props;

    const onMuscleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.dataset.id as string);
    };

    const isSelected = selectedMuscle === id?.toString();

    return (
        <div className={classNames(cls.MuscleCard, {}, [className])}>
            <input
                type="radio"
                name="muscleInline"
                value={name}
                id={name}
                className={cls.input}
                data-id={id}
                onChange={onMuscleChange}
                checked={isSelected}
            />
            <label className={cls.label} htmlFor={name}>
                <svg
                    className={cls.svg}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                >
                    <circle cx="12" cy="14" r="6" />
                    <path d="M9 8h6M10 5h4M12 2v3" />
                </svg>
                <span className={classNames(cls.span, {}, ['item-name'])}>{name}</span>
            </label>
        </div>
    );
};
