import { useState } from 'react';
import cls from './Chip.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';

interface ChipProps {
    className?: string;
    text: string
}

export const Chip = ({ className, text }: ChipProps) => {
    const [isSelected, setIsSelected] = useState(false);

    const onToggle = () => {
        setIsSelected((prev) => !prev);
    };

    return (
        <button
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
            {text}
        </button>
    );
};
