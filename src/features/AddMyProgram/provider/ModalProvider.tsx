import { useMemo, useState } from 'react';
import { Modal, ModalContext } from './lib/ModalContext';
import { ModalContent } from '../ui/ModalContent/ModalContent';

const defaultModal = Modal.CREATE_TYPE;

type ModalProviderProps = {
    openHandler: () => void
}

const ModalProvider = ({ openHandler }: ModalProviderProps) => {
    const [modal, setModal] = useState<Modal>(defaultModal);

    const defaultProps = useMemo(() => ({
        modal,
        setModal,
        openHandler,
    }), [modal]);

    return (
        <ModalContext.Provider value={defaultProps}>
            <ModalContent />
        </ModalContext.Provider>
    );
};

export default ModalProvider;
