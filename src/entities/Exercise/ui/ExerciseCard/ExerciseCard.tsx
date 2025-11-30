import cls from "./ExerciseCard.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import Picture from "../../../../shared/assets/icons/picture.svg?react"
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { AuthRoutePath } from "../../../../shared/config/routeConfig/authRouteConfig.tsx";

interface ExerciseCardProps {
    className?: string;
    pictureUrl?: string;
    title?: string;
    description?: string;
}

export const ExerciseCard = ({className} : ExerciseCardProps) => {
    const { t } = useTranslation();
    
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(AuthRoutePath.exercise_details + "32")
    }

    return (
        <div onClick={clickHandler} className={classNames(cls.ExerciseCard, {}, [className])}>
            <div className={cls.pictureWrapper}>
                <Picture height={250} />
            </div>
            <h2 className={cls.title}>{t("Жим лежа в Смите")}</h2>
            <p>{t("Грудь")}, {t("Трицепс")}, {t("Передняя дельта")}</p>
        </div>
    )
}