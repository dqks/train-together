import cls from "./ProgramsContent.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { ProgramCard } from "../../../../entities/Program";
import { Input } from "../../../../shared/ui/Input/Input.tsx";
import { useTranslation } from "react-i18next";
import { Select } from "../../../../shared/ui/Select/Select.tsx";

interface ProgramsContentProps {
    className?: string;
}

export const ProgramsContent = ({className} : ProgramsContentProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ProgramsContent, {}, [className])}>
            <form className={cls.form}>
                <Input 
                    id="programName" 
                    name="programName" 
                    type="text" 
                    className={cls.programInput}
                    placeholder={t("Найти программу")}
                />
                <Select>
                    <option value="none" disabled selected>{t("Сортировать")}</option>
                    <option value="name">{t("По имени")}</option>
                    <option value="date">{t("Дате обновления")}</option>
                    <option value="rating">{t("Рейтингу")}</option>
                </Select>
            </form>
            <div className={cls.programsWrapper}>
                <ProgramCard className={cls.program} />
                <ProgramCard className={cls.program}/>
                <ProgramCard className={cls.program}/>
                <ProgramCard className={cls.program}/>
            </div>
        </div>
    )
}