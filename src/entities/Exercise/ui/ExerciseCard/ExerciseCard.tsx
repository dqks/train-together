import cls from "./ExerciseCard.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import picture from "../../../../shared/assets/images/picture.png"
import { useTranslation } from "react-i18next";

interface ExerciseCardProps {
    className?: string;
    pictureUrl?: string;
    title?: string;
    description?: string;
}

export const ExerciseCard = ({className} : ExerciseCardProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ExerciseCard, {}, [className])}>
            <div className={cls.pictureWrapper}>
                <img className={cls.picture} src={picture} alt=""/>
            </div>
            <h2 className={cls.title}>{t("Жим лежа в Смите")}</h2>
            <p>{t("Грудь")}, {t("Трицепс")}, {t("Передняя дельта")}</p>
        </div>
    )
}