import cls from './RequirementCard.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';
import Hexagon from '../../assets/icons/hexagon.svg?react';

interface RequirementCardProps {
    className?: string;
    title: string
    description: string
}

export const RequirementCard = ({
    className,
    title,
    description,
}: RequirementCardProps) => (
    <div
        className={classNames(cls.RequirementCard, {}, [className])}
    >
        <div className={cls.title}>
            <Hexagon height={48} width={48} />
            <span>{title}</span>
        </div>
        <div className={cls.description}>
            <p>{description}</p>
        </div>
    </div>
);
