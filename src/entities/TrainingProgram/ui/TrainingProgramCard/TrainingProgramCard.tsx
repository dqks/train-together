import cls from "./TrainingProgramCard.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import picture from "../../../../shared/assets/images/picture.png"

interface TrainingProgramCardProps {
    className?: string;
    programName?: string
    userName?: string;
    description?: string;
    image?: string
}

export const TrainingProgramCard = ({className} : TrainingProgramCardProps) => {
    return (
        <div className={classNames(cls.TrainingProgramCard, {}, [className])}>
            <div className={cls.pictureWrapper}>
                <img className={cls.picture} src={picture} alt="Picture"/>
            </div>
            <div className={cls.infoWrapper}>
                <h3>Название</h3>
                <hr className={cls.hr}/>
                <p>От Username</p>
                <p>Описание</p>
            </div>
        </div>
    )
}