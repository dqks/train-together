import { useContext } from 'react';
import { Modal, ModalContext } from '../../provider/lib/ModalContext.tsx';
import { CreateProgramForm } from '../CreateProgramForm/CreateProgramForm.tsx';
import { ProgramCreateType } from '../ProgramCreateType/ProgramCreateType.tsx';
import { ProgramDays } from '../ProgramDays/ProgramDays.tsx';
import { ProgramPurposes } from '../ProgramPurposes/ProgramPurposes.tsx';

export const ModalContent = () => {
    const { modal, setModal } = useContext(ModalContext);
    return (
        <>
            {modal === Modal.FORM && <CreateProgramForm />}
            {modal === Modal.CREATE_TYPE && <ProgramCreateType setModal={setModal} />}
            {modal === Modal.DAYS && <ProgramDays setModal={setModal} />}
            {modal === Modal.PURPOSES && <ProgramPurposes setModal={setModal} />}
        </>
    );
};
