import { createContext } from 'react';

export enum Modal {
    PURPOSES = "purposes",
    DAYS = "days",
    CREATE_TYPE = "create_type",
    FORM = "form",
}
    
export interface ModalContextProps {
    modal?: Modal;
    setModal?: (modal: Modal) => void;
}

export const ModalContext = createContext<ModalContextProps>({});