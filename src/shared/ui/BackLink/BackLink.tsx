import { Link } from 'react-router';
import cls from './BackLink.module.scss';
import BackArrow from '@/shared/assets/icons/backArrow.svg?react';
import { classNames } from '@/shared/lib/classNames/classNames.ts';

interface BackLinkProps {
    className?: string;
    text: string;
    to: string;
}

export const BackLink = ({ className, text, to } : BackLinkProps) => (
    <Link className={classNames(cls.backLink, {}, [className])} to={to}>
        <BackArrow className={cls.backLinkSvg} />
        {text}
    </Link>
);
