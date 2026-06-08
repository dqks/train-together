import { Input } from '@/shared/ui/Input/Input.tsx';
import cls from './SearchInput.module.scss';
import Loupe from '@/shared/assets/icons/loupe.svg?react';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

interface SearchInputProps {
    className?: string;
    placeholder?: string;
    onChange?: (value: string) => void
    value?: string
}

export const SearchInput = (props : SearchInputProps) => {
    const {
        className,
        placeholder,
        onChange,
        value,
    } = props;

    return (
        <div className={classNames(cls.SearchInput, {}, [className])}>
            <Loupe />
            <Input
                value={value}
                onChange={onChange}
                type="text"
                className="form-input"
                id="searchInput"
                placeholder={placeholder}
            />
        </div>
    );
};
