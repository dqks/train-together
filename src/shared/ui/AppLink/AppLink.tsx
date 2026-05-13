import { Link, type LinkProps } from 'react-router';
import type { ReactNode } from 'react';
import cls from './AppLink.module.scss';
import { classNames } from '../../lib/classNames/classNames.ts';

export enum LinkColor {
    BLACK = 'black',
    WHITE = 'white',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    linkColor?: LinkColor
    deleteUnderLine?: boolean
}

export const AppLink = (props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        linkColor = LinkColor.WHITE,
        deleteUnderLine = false,
        ...other
    } = props;
    return (
        <Link
            to={to}
            className={classNames(
                cls.AppLink,
                { [cls.underLined]: deleteUnderLine },
                [className, cls[linkColor]],
            )}
            {...other}
        >
            {children}
        </Link>
    );
};
