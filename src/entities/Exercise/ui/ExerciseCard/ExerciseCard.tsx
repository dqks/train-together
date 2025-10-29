import cls from "./ExerciseCard.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import picture from "../../../../shared/assets/images/picture.png"
import { Chip } from "../../../../shared/ui/Chip/Chip.tsx";

interface ExerciseCardProps {
    className?: string;
    pictureUrl?: string;
    title?: string;
    description?: string;
}

export const ExerciseCard = ({className} : ExerciseCardProps) => {
    return (
        <div className={classNames(cls.ExerciseCard, {}, [className])}>
            <div className={cls.pictureWrapper}>
                <img className={cls.picture} src={picture} alt=""/>
            </div>
            <h2 className={cls.title}>Жим лежа со штангой в Смите</h2>
            <p>Грудь, трицепс, передняя дельта</p>
            <Chip text={"Чип"}/>
        </div>
    )
}