import { createContext } from 'react';

export enum Modal {
    PURPOSES = "puroses",
    DAYS = "days",
    CREATE_TYPE = "create_type",
    FORM = "form",
}
    
export interface ModalContextProps {
    modal?: Modal;
    setContent?: (modal: Modal) => void;
}

export const ModalContext = createContext<ModalContextProps>({});