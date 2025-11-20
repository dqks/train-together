import cls from "./OveriviewContent.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { ProgramCard } from "../../../../entities/TrainingProgram/index.ts";
import { useTranslation } from "react-i18next";

interface OverviewContentProps {
    className?: string;
}

export const OverviewContent = ({className} : OverviewContentProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.OverviewContent, {}, [className])}>
            <div>
                <h1 className={cls.programTitle}>{t("Закрепленные программы")}</h1>
                <div className={cls.programsWrapper}>
                    <ProgramCard className={cls.program} />
                    <ProgramCard className={cls.program}/>
                    <ProgramCard className={cls.program}/>
                    <ProgramCard className={cls.program}/>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}