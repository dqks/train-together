import cls from './MyProgramsControl.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { SearchMyPrograms } from '@/features/SearchMyPrograms/ui/SearchMyPrograms.tsx';

interface MyProgramsControlProps {
    className?: string;
}

export const MyProgramsControl = ({ className } : MyProgramsControlProps) => (
    <div className={classNames(cls.FilterMyProgram, {}, [className])}>
        <SearchMyPrograms />
    </div>
);
