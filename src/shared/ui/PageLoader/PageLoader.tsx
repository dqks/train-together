import cls from "./PageLoader.module.scss"
import { classNames } from "../../lib/classNames/classNames.ts";
import { Loader } from "../Loader/Loader.tsx";

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({className}: PageLoaderProps) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    )
}