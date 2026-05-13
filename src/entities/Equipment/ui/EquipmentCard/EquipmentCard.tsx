import type { ChangeEvent } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import cls from './EquipmentCard.module.scss';

interface EquipmentCardProps {
    className?: string;
    name?: string | undefined
    id: number | undefined
    onChange: (value: string) => void
    selectedEquipment?: string;
}

export const EquipmentCard = (props : EquipmentCardProps) => {
    const {
        className,
        name,
        onChange,
        id,
        selectedEquipment,
    } = props;

    const isSelected = selectedEquipment === id?.toString();
    const onEquipmentChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.dataset.id as string);
    };
    return (
        <div className={classNames(cls.EquipmentCard, {}, [className])}>
            <input
                type="radio"
                name="equipmentInline"
                onChange={onEquipmentChange}
                value={name}
                id={name}
                className={cls.input}
                data-id={id}
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
