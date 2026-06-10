import type { InputHTMLAttributes } from 'react';
import cls from './ToggleSwitch.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

export interface ToggleSwitchProps {
    className?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
}

type NativeProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'onChange' | 'type'>;

export const ToggleSwitch = ({
    className,
    checked,
    onChange,
    label,
    ...native
}: ToggleSwitchProps & NativeProps) => (
    <label className={classNames(cls.Toggle, {}, [className])}>
        <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            {...native}
        />
        <span className={cls.switch} />
        {label ? <span className={cls.text}>{label}</span> : null}
    </label>
);
