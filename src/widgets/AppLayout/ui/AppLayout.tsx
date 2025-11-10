import cls from "./AppLayout.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Outlet } from "react-router";
import { Navbar } from "../../Navbar/ui/Navbar.tsx";

interface AppLayoutProps {
    className?: string;
}

export const AppLayout = ({className} : AppLayoutProps) => {
    return (
        <div className={classNames(cls.AppLayout, {}, [className])}>
            <Navbar />
            <Outlet />
        </div>
    )
}