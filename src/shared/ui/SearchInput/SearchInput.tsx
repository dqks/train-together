import { Input } from '@/shared/ui/Input/Input.tsx';
import cls from './SearchInput.module.scss';
import Loupe from '@/shared/assets/icons/loupe.svg?react';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

interface SearchInputProps {
    className?: string;
    placeholder?: string;
}

export const SearchInput = ({ className, placeholder } : SearchInputProps) => (
    <div className={classNames(cls.SearchInput, {}, [className])}>
        <Loupe />
        <Input type="text" className="form-input" id="searchInput" placeholder={placeholder} />
    </div>
);
