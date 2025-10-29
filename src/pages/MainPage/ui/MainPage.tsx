import cls from "./MainPage.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Navbar } from "../../../widgets/Navbar";

interface MainPageProps {
    className?: string;
}

export const MainPage = ({className} : MainPageProps) => {
    return (
        <div className={classNames(cls.MainPage,{}, [className])}>
            <Navbar />
        </div>
    )
}