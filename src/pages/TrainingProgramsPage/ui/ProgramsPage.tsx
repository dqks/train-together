import cls from "./ProgramsPage.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";

interface TrainingProgramsPageProps {
    className?: string;
}

const ProgramsPage = ({className} : TrainingProgramsPageProps) => {
    return (
        <div className={classNames(cls.TrainingProgramsPage, {}, [className])}>
        </div>
    )
}

export default ProgramsPage;