import cls from "./AppLayout.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { Outlet } from "react-router";
import { Navbar } from "../../../../widgets/Navbar";
import { useState } from "react";
import { BackButton } from "../../../../features/BackButton";

interface AppLayoutProps {
    className?: string;
}

export type AppContextType = {
    setTitle: (title: string) => void
    setBackButton: (path: string) => void
}

export const AppLayout = ({className}: AppLayoutProps) => {
    const [title, setTitle] = useState('');
    const [backButton, setBackButton] = useState('')

    const appContext : AppContextType = {
        setTitle,
        setBackButton
    }

    return (
        <div className={classNames(cls.AppLayout, {}, [className])}>
            <Navbar/>
            <div className={cls.contentWrapper}>
                {backButton && <BackButton path={backButton} />}
                <h1 className={cls.title}>{title}</h1>
                <Outlet context={appContext}/>
            </div>
        </div>
    )
}