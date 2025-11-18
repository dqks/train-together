import cls from "./ProgramsPage.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { useOutletContext } from "react-router";
import type { AppContextType }
    from "../../../app/layout/AppLayout/ui/AppLayout.tsx";
import { useEffect } from "react";
import { ProgramsList } from "../../../widgets/ProgramsList";
import { FilterPrograms } from "../../../widgets/FilterPrograms";
import { useTranslation } from "react-i18next";

interface ProgramsPageProps {
    className?: string;
}

const ProgramsPage = ({className} : ProgramsPageProps) => {
    const { t } = useTranslation();
    const { setTitle } : AppContextType = useOutletContext();

    useEffect(() => {
        setTitle(t('Программы пользователей'))
    }, [setTitle, t])
    return (
        <div className={classNames(cls.ProgramsPage, {}, [className])}>
            <ProgramsList />
            <FilterPrograms />
        </div>
    )
}

export default ProgramsPage;