import cls from './RequirementCard.module.scss';
import { classNames } from '../../../../../shared/lib/classNames/classNames.ts';
import Hexagon from '../../../../../shared/assets/icons/hexagon.svg?react';

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
    <div className={classNames(cls.RequirementCard, {}, ['card'])}>
        <div className={cls.requirementIcon}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    d="M6.5 6.5h11M6.5 17.5h11M3 12h3M18 12h3M6 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                />
            </svg>
        </div>
        <h4 className={cls.requirementTitle}>Набор массы</h4>
        <p className="text-small text-muted">Силовые тренировки для роста мышц</p>
    </div>
);
