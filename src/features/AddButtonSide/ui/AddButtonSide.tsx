import cls from "./AddButtonSide.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Button } from "../../../shared/ui/Button/Button.tsx";
import { useState } from "react";
import { SidePanel } from "../../../shared/ui/SidePanel/SidePanel.tsx";

interface AddButtonSideProps {
    className?: string;
    sidePageChildren: React.ReactNode;
    contentClassName?: string;
}

export const AddButtonSide = ({
    className, 
    sidePageChildren,
    contentClassName
}: AddButtonSideProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const sidePanelHandler = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className={classNames(cls.AddExercise, {}, [className])}>
            <Button onClick={sidePanelHandler}>+</Button>
            <SidePanel
                contentClassName={contentClassName}
                isOpen={isOpen}
                onOutsideClick={sidePanelHandler}
            >
                {
                    sidePageChildren
                }
            </SidePanel>
        </div>
    )
}