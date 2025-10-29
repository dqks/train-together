import cls from "./AppLink.module.scss"
import { Link, type LinkProps } from "react-router";
import type { ReactNode } from "react";
import { classNames } from "../../lib/classNames/classNames.ts";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...other
    } = props;
    return (
        <Link to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...other}
        >
            {children}
        </Link>
    )
}