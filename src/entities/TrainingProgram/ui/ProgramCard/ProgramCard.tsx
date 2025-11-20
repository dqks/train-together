import cls from "./ProgramCard.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import picture from "../../../../shared/assets/images/picture.png"

interface ProgramCardProps {
    className?: string;
    programName?: string
    userName?: string;
    description?: string;
    image?: string;
    deleteCreator?: boolean;
    showRating?: boolean;
}

export const ProgramCard = ({className, deleteCreator = false, showRating} : ProgramCardProps) => {
    return (
        <div className={classNames(cls.ProgramCard, {}, [className])}>
            <div className={cls.pictureWrapper}>
                <img className={cls.picture} src={picture} alt="Picture"/>
            </div>
            <div className={cls.infoWrapper}>
                {
                    showRating 
                    ? <div className={cls.titleWrapper}>
                        <h3>Название</h3>
                        <span>5 &#9733;</span>
                    </div>
                    : <>
                        <h3>Название</h3>
                    </>
                }
                <hr className={cls.hr}/>
                <p className={classNames("", {[cls.deleteCreator]: deleteCreator}, [])}>От Username</p>
                <p>Описание</p>
            </div>
        </div>
    )
}