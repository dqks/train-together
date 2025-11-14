import cls from "./ProgramCategory.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { AppLink } from "../../../shared/ui/AppLink/AppLink.tsx";

interface ProgramCategoryProps {
    className?: string;
}

export const ProgramCategory = ({className} : ProgramCategoryProps) => {
    return (
        <div className={classNames(cls.ProgramCategory, {}, [className])}>
            <h2 className={cls.title}>Просмотреть:</h2>
            <AppLink deleteUnderLine={true} to="">Главная</AppLink>
            <AppLink deleteUnderLine={true} to="">Самые популярные</AppLink>
            <AppLink deleteUnderLine={true} to="">С наивысшим рейтингом</AppLink>
            <AppLink deleteUnderLine={true} to="">Новые</AppLink>
            <AppLink deleteUnderLine={true} to="">Отслеживаемые</AppLink>
        </div>
    )
}