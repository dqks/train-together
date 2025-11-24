import { useState } from "react";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import cls from "./FilterExerciseButton.module.scss"
import { FilterButton } from "../../../../features/FIlterButton";
import { useTranslation } from "react-i18next";

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
                        <ul>
                            <li>
                                Грудь
                                <ul><li>dsd</li></ul>
                            </li>
                            <li>Спина</li>
                            <li>Ноги</li>
                            <li>Руки</li>
                            <li>Пресс</li>
                        </ul>
                        <p>{t("Оборудование")}:</p>
                        <ul>
                            <li>Свободные веса</li>
                            <li>Тренажеры</li>
                        </ul>
                    </>
                }
            />
        </div>
    )
}