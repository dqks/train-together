import cls from "./AppLayout.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { Outlet } from "react-router";
import { Navbar } from "../../../../widgets/Navbar";

interface AppLayoutProps {
    className?: string;
}

export const AppLayout = ({className}: AppLayoutProps) => {
    return (
        <div className={classNames(cls.AppLayout, {}, [className])}>
            <Navbar/>
            <div className={cls.contentWrapper}>
                <h1 className={cls.title}>Упражнения</h1>
                <Outlet/>
            </div>
        </div>
    )
}