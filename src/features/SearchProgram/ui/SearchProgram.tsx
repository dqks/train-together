import cls from './SearchProgram.module.scss';
import { Input } from '../../../shared/ui/Input/Input.tsx';
import { classNames } from '../../../shared/lib/classNames/classNames.ts';

interface SearchProgramProps {
    className?: string;
}

export const SearchProgram = ({ className } : SearchProgramProps) => (
    <div className={classNames(cls.SearchProgram, {}, [className])}>
        <Input id="programName" name="programName" type="search" />
    </div>
);
