import { useState } from 'react';

type UseModalReturnType = [
    isOpen: boolean,
    openHandler: () => void
]

export const useModal = (): UseModalReturnType => {
    const [isOpen, setIsOpen] = useState(false);

    const openHandler = () => {
        setIsOpen((prev) => !prev);
    };

    return [isOpen, openHandler];
};
