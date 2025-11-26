import cls from "./AddMyProgram.module.scss"
import { Button } from "../../../shared/ui/Button/Button";
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { useState } from "react";
import { Modal } from "../../../shared/ui/Modal/Modal";
import { ModalContent } from "./ModalContent/ModalContent.tsx";

interface AddMyProgramProps {
    className?: string;
}

export const AddMyProgram = ({className} : AddMyProgramProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const openHandler = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className={classNames(cls.AddMyProgram, {}, [className])}>
            <Button onClick={openHandler}>+</Button>
            <Modal
                isOpen={isOpen}
                onOutsideClick={openHandler}
            >
                <ModalContent />
            </Modal>
        </div>
    )
}