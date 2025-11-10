import cls from "./ExercisePage.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";

interface ExercisePageProps {
    className?: string;
}

const ExercisePage = ({className} : ExercisePageProps) => {
    return (
        <div className={classNames(cls.ExercisePage, {}, [className])}>
            <p>dasdasd</p>
        </div>
    )
}

export default ExercisePage;