import { classNames } from '../../../../shared/lib/classNames/classNames.ts';
import cls from './ExerciseInfo.module.scss';

interface ExerciseInfoProps {
    title?: string;
    children?: React.ReactNode
    className?: string;
}

export const ExerciseInfo = ({
    className,
    title,
    children,
} : ExerciseInfoProps) => (
    <div className={classNames(cls.ExerciseInfo, {}, [className])}>
        <h3 className={cls.title}>{title}</h3>
        <div>
            {children}
        </div>
    </div>
);
