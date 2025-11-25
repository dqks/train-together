import { AddButtonSide } from "../../../../features/AddButtonSide/index.ts"
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { SidePanelAddContent } from "../SidePanelAddContent/SidePanelAddContent.tsx";
import cls from "./AddExerciseButton.module.scss"

interface AddExerciseButtonProps {
    className?: string;
}

export const AddExerciseButton = ({className} : AddExerciseButtonProps) => {
    
    return (
        <div className={classNames(cls.AddExerciseButton, {}, [className])}>
            <AddButtonSide 
                contentClassName={cls.sidePanel}
                sidePageChildren={<SidePanelAddContent />}                
            />
        </div>
    )
}