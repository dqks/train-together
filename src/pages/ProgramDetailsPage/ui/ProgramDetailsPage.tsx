import cls from "./ProgramDetailsPage.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { usePageTitle } from "../../../shared/lib/usePageTItle/usePageTitle.ts";
import { useTranslation } from "react-i18next";
import { ProgramCard, ProgramDay } from "../../../entities/Program";
import { SubscribeProgram } from "../../../features/SubscribeProgram";

interface ProgramDetailsPageProps {
    className?: string;
}

const ProgramDetailsPage = ({className} : ProgramDetailsPageProps) => {
    const { t } = useTranslation();
    usePageTitle("Программа", t)

    return (
        <div className={classNames(cls.ProgramDetailsPage, {}, [className])}>
            <ProgramCard />
            <SubscribeProgram />
            <ProgramDay className={cls.programDay}/>
        </div>
    )
}

export default ProgramDetailsPage;