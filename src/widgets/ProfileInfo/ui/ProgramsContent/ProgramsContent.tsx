import cls from "./ProgramsContent.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { ProgramCard } from "../../../../entities/TrainingProgram";
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
                    placeholder={t("Найти программу")}
                />
                <Select>
                    <option value="none" disabled selected>Sort</option>
                    <option value="name">Name</option>
                    <option value="date">Last updated</option>
                    <option value="rating">Rating</option>
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