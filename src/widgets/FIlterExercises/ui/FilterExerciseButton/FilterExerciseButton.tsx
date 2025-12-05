// import { classNames } from "../../../../shared/lib/classNames/classNames";
import { useState } from 'react';
import cls from './FilterExerciseButton.module.scss';
import { FilterButton } from '../../../../features/FIlterButton';
import { SidePanelFilterContent } from '../SidePanelFilterContent/SidePanelFilterContent';
//
// interface FilterExerciseButtonProps {
//     // className?: string;
// }

export const FilterExerciseButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const clickHandler = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <FilterButton
            isOpen={isOpen}
            onOutsideClick={clickHandler}
            contentClassName={cls.sidePanelContent}
            sidePageChildren={<SidePanelFilterContent />}
        />
    );
};
