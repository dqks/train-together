import cls from "./Footer.module.scss"
import { classNames } from "../../lib/classNames/classNames.ts";

interface FooterProps {
    className?: string;
}

export const Footer = ({className} : FooterProps) => {
    return (
        <div className={classNames(cls.Footer, {}, [className])}>
            <p className={cls.text}>© 2025 TrainTogether</p>
        </div>
    )
}