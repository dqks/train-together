import { useState } from "react";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import cls from "./FilterExerciseButton.module.scss"
import { FilterButton } from "../../../../features/FIlterButton";
import { useTranslation } from "react-i18next";
import { MuscleList } from "../MuscleList/MuscleList";

interface FilterExerciseButtonProps {
    className?: string;
}

export const FilterExerciseButton = ({className} : FilterExerciseButtonProps) => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const clickHandler = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <div className={classNames(cls.FilterExerciseButton, {}, [className])}>
            <FilterButton 
                isOpen={isOpen}
                onOutsideClick={clickHandler}
                contentClassName={cls.sidePanelContent}
                sidePageChildren={
                    <>
                        <h1>{t("Фильтры")}</h1>
                        <p>{t("Мышцы")}:</p>     
                        <MuscleList title={"Грудь"} muscles={[{
                                id: 1,
                                name: "Верхняя часть груди"
                            }, {
                                id: 2,
                                name: "Средняя часть груди"
                            }, {
                                id: 3,
                                name: "Нижняя часть груди"
                            }]} 
                        />                   
                        <p>{t("Оборудование")}:</p>
                    </>
                }
            />
        </div>
    )
}