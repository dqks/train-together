import cls from "./ProgramDetailsPage.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";

interface ProgramDetailsPageProps {
    className?: string;
}

const ProgramDetailsPage = ({className} : ProgramDetailsPageProps) => {
    return (
        <div className={classNames(cls.ProgramDetailsPage, {}, [className])}>
            ProgramDetailPage
        </div>
    )
}

export default ProgramDetailsPage;