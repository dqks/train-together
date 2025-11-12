import cls from "./ProgramsPage.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { useOutletContext } from "react-router";
import type { AppContextType } from "../../../app/layout/AppLayout/ui/AppLayout.tsx";
import { useEffect } from "react";

interface TrainingProgramsPageProps {
    className?: string;
}

const ProgramsPage = ({className} : TrainingProgramsPageProps) => {
    const { setTitle } : AppContextType = useOutletContext();

    useEffect(() => {
        setTitle('Тренировки пользователей')
    }, [setTitle])
    return (
        <div className={classNames(cls.TrainingProgramsPage, {}, [className])}>
        </div>
    )
}

export default ProgramsPage;