import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '../MuscleCard/MuscleCard.module.scss';
import type { MuscleCardProps } from '../../model/types/muscleSchema.ts';

interface SecondaryMuscleCardProps extends MuscleCardProps {
    value: string
}

export const SecondaryMuscleCard = ({
    className, name, value,
} : SecondaryMuscleCardProps) => (
    <div className={classNames(cls.SecondaryMuscleCard, {}, [className])}>
        <input
            type="checkbox"
            name="seconddaryMuscleInline"
            value={value}
            id={value}
            className={cls.input}
        />
        <label className={cls.label} htmlFor={value}>
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
