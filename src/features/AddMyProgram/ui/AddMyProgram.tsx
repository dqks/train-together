import cls from "./AddMyProgram.module.scss"
import { Button } from "../../../shared/ui/Button/Button";
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { useState } from "react";
import { Modal } from "../../../shared/ui/Modal/Modal";
import { ModalContent } from "./ModalContent/ModalContent.tsx";
import { ProgramCreateType } from "./ProgramCreateType/ProgramCreateType.tsx";
import { ProgramPurposes } from "./ProgramPurposes/ProgramPurposes.tsx";
import { ProgramDays } from "./ProgramDays/ProgramDays.tsx";

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
            <Button type="button" onClick={openHandler}>+</Button>
            {/* <Modal
                isOpen={isOpen}
                onOutsideClick={openHandler}
            >
                <ModalContent />
            </Modal> */}

            {/* <Modal
                isOpen={isOpen}
                onOutsideClick={openHandler}
            >
                <ProgramCreateType />
            </Modal> */}

            {/* <Modal
                isOpen={isOpen}
                onOutsideClick={openHandler}
            >
                <ProgramPurposes />
            </Modal> */}

            <Modal
                isOpen={isOpen}
                onOutsideClick={openHandler}
            >
                <ProgramDays />
            </Modal>
        </div>
    )
}