import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './LandingProgramCard.module.scss';
import Picture from '../../../../shared/assets/icons/picture.svg?react';

interface LandingTrainingProgramCardProps {
    className?: string;
    image?: string;
    title?: string;
    userName?: string;
}

export const LandingProgramCard = ({
    className,
} : LandingTrainingProgramCardProps) => (
    <div className={classNames(
        cls.LandingTrainingProgramCardProps,
        {},
        [className],
    )}
    >
        <Picture />
        <p className={cls.title}>Название тренировки</p>
        <p className={cls.userName}>Username</p>
    </div>
);
