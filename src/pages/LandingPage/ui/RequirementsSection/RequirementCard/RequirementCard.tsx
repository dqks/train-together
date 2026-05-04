import React from 'react';
import cls from './RequirementCard.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

interface RequirementCardProps {
    title: string
    description: string
    icon: React.ReactNode;

}

export const RequirementCard = ({
    title,
    description,
    icon,
}: RequirementCardProps) => (
    <div className={classNames(cls.RequirementCard, {}, ['card'])}>
        <div className={cls.requirementIcon}>
            {icon}
        </div>
        <h4 className={cls.requirementTitle}>{title}</h4>
        <p className="text-small text-muted">{description}</p>
    </div>
);
