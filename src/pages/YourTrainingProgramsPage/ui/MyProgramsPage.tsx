import cls from "./MyProgramsPage.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";

interface YourTrainingProgramsPageProps {
    className?: string;
}

const MyProgramsPage = ({className} : YourTrainingProgramsPageProps) => {
    return (
        <div className={classNames(cls.TrainingProgramsPage, {}, [className])}>

        </div>
    )
}

export default MyProgramsPage;