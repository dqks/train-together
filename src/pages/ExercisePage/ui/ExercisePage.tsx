import cls from "./ExercisePage.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { ExerciseCardList } from "../../../widgets/ExerciseCardList";

interface ExercisePageProps {
    className?: string;
}

const ExercisePage = ({className} : ExercisePageProps) => {
    return (
        <div className={classNames(cls.ExercisePage, {}, [className])}>
            <ExerciseCardList />
        </div>
    )
}

export default ExercisePage;