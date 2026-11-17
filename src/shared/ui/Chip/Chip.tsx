import { useState } from 'react';
import cls from './Chip.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';

interface ChipProps {
    className?: string;
    value: string
}

export const Chip = ({ className, value }: ChipProps) => {
    const [isSelected, setIsSelected] = useState(false);

    const onToggle = () => {
        setIsSelected((prev) => !prev);
    };

    return (
        <button
            data-testid="chip"
            type="button"
            onClick={onToggle}
            className={
                classNames(
                    cls.Chip,
                    { [cls.selected]: isSelected },
                    [className],
                )
            }
        >
            {value}
        </button>
    );
};
