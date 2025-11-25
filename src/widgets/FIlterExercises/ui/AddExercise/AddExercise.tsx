import { useTranslation } from "react-i18next";
import { AddButtonSide } from "../../../../features/AddButtonSide"
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { Button } from "../../../../shared/ui/Button/Button";
import { Select } from "../../../../shared/ui/Select/Select";
import cls from "./AddExercise.module.scss"
import { Input } from "../../../../shared/ui/Input/Input.tsx";

interface AddExerciseProps {
    className?: string;
}

export const AddExercise = ({className} : AddExerciseProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Footer, {}, [className])}>
            <AddButtonSide 
                contentClassName={cls.sidePanel}
                sidePageChildren={
                <>
                    <h2 className={cls.sidePanelTitle}>{t("Создание упражнения")}</h2>
                    <div className={cls.inputWrapper}>
                        <label htmlFor="exerciseName">{t("Название")}</label>
                        <Input id={"exerciseName"} type={"text"}
                            name={"exerciseName"}/>
                    </div>
                    <Select name="equipment">
                        <option value="none" selected disabled>
                            {t("Оборудование")}
                        </option>
                    </Select>
                    <Select name="muscle">
                        <option value="none" selected disabled>
                            {t("Мышечная группа")}
                        </option>
                    </Select>
                    <Button>{t("Создать")}</Button>
                </>
                }                
            />
        </div>
    )
}