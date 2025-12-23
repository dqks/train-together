import { useMemo, useState } from 'react';
import { Modal, ModalContext } from './lib/ModalContext';
import { ModalContent } from '../ui/ModalContent/ModalContent';

const defaultModal = Modal.CREATE_TYPE;

const ModalProvider = () => {
    const [modal, setModal] = useState<Modal>(defaultModal);

    const defaultProps = useMemo(() => ({
        modal,
        setModal,
    }), [modal]);

    return (
        <ModalContext.Provider value={defaultProps}>
            <ModalContent />
        </ModalContext.Provider>
    );
};

export default ModalProvider;
