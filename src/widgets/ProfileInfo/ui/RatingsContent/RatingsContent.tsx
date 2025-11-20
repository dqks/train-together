import cls from "./RatingsContent.module.scss"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { Select } from "../../../../shared/ui/Select/Select.tsx";
import { Input } from "../../../../shared/ui/Input/Input.tsx";
import { ProgramCard } from "../../../../entities/TrainingProgram/index.ts";
import { useTranslation } from "react-i18next";

interface RatingsContentProps {
    className?: string;
}

export const RatingsContent = ({className} : RatingsContentProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.RatingsContent, {}, [className])}>
            <form className={cls.form}>
                            <Input 
                                id="programName" 
                                name="programName" 
                                type="text" 
                                className={cls.programInput}
                                placeholder={t("Найти оцененную программу")}
                            />
                            <Select>
                                <option value="none" disabled selected>{t("Сортировать")}</option>
                                <option value="name">{t("По имени")}</option>
                                <option value="rating">{t("Рейтингу")}</option>
                            </Select>
                        </form>
                        <div className={cls.programsWrapper}>
                            {/* Какую он оценку поставилв */}
                            <ProgramCard showRating={true} className={cls.program} />
                            <ProgramCard showRating={true} className={cls.program}/>
                            <ProgramCard showRating={true} className={cls.program}/>
                            <ProgramCard showRating={true} className={cls.program}/>
                        </div>
        </div>
    )
}