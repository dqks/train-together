import cls from "./LandingSection.module.scss"
import { classNames } from "../../lib/classNames/classNames.ts";

interface LandingSectionProps {
    className?: string;
    title: string;
    description?: string;
    children: React.ReactNode;
}

export const LandingSection = ({
    className, 
    title,
    description,
    children
} : LandingSectionProps) => {
    return (
        <div className={classNames(cls.LandingSection, {}, [className])}>
                <h1 className={cls.title}>{title}</h1>
                <p className={cls.description}>{description}</p>
                {children}
        </div>
    )
}