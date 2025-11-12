import cls from "./MyProgramsPage.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { useOutletContext } from "react-router";
import type { AppContextType } from "../../../app/layout/AppLayout/ui/AppLayout.tsx";
import { useEffect } from "react";

interface YourTrainingProgramsPageProps {
    className?: string;
}

const MyProgramsPage = ({className} : YourTrainingProgramsPageProps) => {
    const { setTitle } : AppContextType = useOutletContext();

    useEffect(() => {
        setTitle('Ваши тренировки')
    }, [setTitle])

    return (
        <div className={classNames(cls.TrainingProgramsPage, {}, [className])}>

        </div>
    )
}

export default MyProgramsPage;