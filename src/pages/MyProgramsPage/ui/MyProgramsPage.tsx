import cls from "./MyProgramsPage.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { useOutletContext } from "react-router";
import type { AppContextType }
    from "../../../app/layout/AppLayout/ui/AppLayout.tsx";
import { useEffect } from "react";
import { ProgramsList } from "../../../widgets/ProgramsList";
import { FilterMyProgram } from "../../../widgets/FilterMyPrograms";
import { useTranslation } from "react-i18next";

interface YourTrainingProgramsPageProps {
    className?: string;
}

const MyProgramsPage = ({className} : YourTrainingProgramsPageProps) => {
    const { t } = useTranslation();

    const { setTitle } : AppContextType = useOutletContext();

    useEffect(() => {
        setTitle(t('Ваши программы'))
    }, [setTitle, t])

    return (
        <div className={classNames(cls.MyProgramsPage, {}, [className])}>
            <FilterMyProgram />
            <ProgramsList/>
        </div>
    )
}

export default MyProgramsPage;