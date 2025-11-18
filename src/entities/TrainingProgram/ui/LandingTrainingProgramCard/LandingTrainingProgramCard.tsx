import { classNames } from "../../../../shared/lib/classNames/classNames";
import cls from "./LandingTrainingProgramCard.module.scss"
import picture from "../../../../shared/assets/images/picture.png"

interface LandingTrainingProgramCardProps {
    className?: string;
    image?: string;
    title?: string;
    userName?: string;
}

export const LandingTrainingProgramCard = ({
    className
} : LandingTrainingProgramCardProps) => {
    return (
        <div className={classNames(cls.LandingTrainingProgramCardProps,
            {},
            [className])}>
            <img className={cls.picture} src={picture} alt="Картинка" />
            <p className={cls.title}>Название тренировки</p>
            <p className={cls.userName}>Username</p>
        </div>
    )
}