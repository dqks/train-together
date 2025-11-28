import { useContext } from "react";
// import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { Modal, ModalContext } from "../../provider/lib/ModalContext.tsx";
import { CreateProgramForm } from "../CreateProgramForm/CreateProgramForm.tsx";
import { ProgramCreateType } from "../ProgramCreateType/ProgramCreateType.tsx";
import { ProgramDays } from "../ProgramDays/ProgramDays.tsx";
import { ProgramPurposes } from "../ProgramPurposes/ProgramPurposes.tsx";

export const ModalContent = () => {
    const modal = useContext(ModalContext)
    return (
        <>
            {modal.modal === Modal.FORM && <CreateProgramForm/>}
            {modal.modal === Modal.CREATE_TYPE && <ProgramCreateType />}
            {modal.modal === Modal.DAYS && <ProgramDays />}
            {modal.modal === Modal.PURPOSES && <ProgramPurposes />}
        </>
    )
}