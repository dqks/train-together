import { useState } from "react";
// import { classNames } from "../../../../shared/lib/classNames/classNames";
import cls from "./FilterExerciseButton.module.scss"
import { FilterButton } from "../../../../features/FIlterButton";
import { SidePanelContent } from "../SidePanelContent/SidePanelContent";

interface FilterExerciseButtonProps {
    // className?: string;
}

export const FilterExerciseButton = ({} : FilterExerciseButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const clickHandler = () => {
        setIsOpen(prev => !prev);
    }

    return (
            <FilterButton 
                isOpen={isOpen}
                onOutsideClick={clickHandler}
                contentClassName={cls.sidePanelContent}
                sidePageChildren={<SidePanelContent />}
            />
    )
}