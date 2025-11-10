import cls from "./AppLink.module.scss"
import { Link, type LinkProps } from "react-router";
import type { ReactNode } from "react";
import { classNames } from "../../lib/classNames/classNames.ts";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export enum LinkColor  {
    BLACK = "black",
    WHITE = "white",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    theme?: AppLinkTheme;
    linkColor?: LinkColor
    deleteUnderLine?: boolean
}

export const AppLink = (props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        linkColor = LinkColor.WHITE,
        deleteUnderLine = false,
        ...other
    } = props;
    return (
        <Link to={to}
            className={classNames(cls.AppLink, {[cls.underLined]: deleteUnderLine}, [className, cls[theme], cls[linkColor]])}
            {...other}
        >
            {children}
        </Link>
    )
}