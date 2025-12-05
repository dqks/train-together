import { useState } from 'react';
import cls from './AddMyProgram.module.scss';
import { Button } from '../../../shared/ui/Button/Button';
import { classNames } from '../../../shared/lib/classNames/classNames.ts';
import { Modal } from '../../../shared/ui/Modal/Modal';
import ModalProvider from '../provider/ModalProvider.tsx';

interface AddMyProgramProps {
    className?: string;
}

export const AddMyProgram = ({ className } : AddMyProgramProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const openHandler = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={classNames(cls.AddMyProgram, {}, [className])}>
            <Button type="button" onClick={openHandler}>+</Button>

            <Modal
                isOpen={isOpen}
                onOutsideClick={openHandler}
                wrapperClassName={cls.modal}
            >
                <ModalProvider />
            </Modal>
        </div>
    );
};
