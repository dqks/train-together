import { useState } from "react";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import cls from "./FilterExerciseButton.module.scss"
import { FilterButton } from "../../../../features/FIlterButton";
import { SidePanelContent } from "../SidePanelContent/SidePanelContent";

interface FilterExerciseButtonProps {
    className?: string;
}

export const FilterExerciseButton = ({className} : FilterExerciseButtonProps) => {
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
                sidePageChildren={<SidePanelContent />}
            />
        </div>
    )
}