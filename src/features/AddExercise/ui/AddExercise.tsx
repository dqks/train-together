import cls from "./AddExercise.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Button } from "../../../shared/ui/Button/Button.tsx";
import { useState } from "react";
import { Modal } from "../../../shared/ui/Modal/Modal.tsx";
import { Input } from "../../../shared/ui/Input/Input.tsx";
import { Select } from "../../../shared/ui/Select/Select.tsx";

interface AddExerciseProps {
    className?: string;
}

export const AddExercise = ({className} : AddExerciseProps) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const modalHandler = () => {
        setIsOpen(prev => !prev)
    }
    
    return (
        <div className={classNames(cls.AddExercise, {}, [className])}>
            <Button onClick={modalHandler}>+</Button>
            <Modal contentClassName={cls.modal} isOpen={isOpen} onOutsideClick={modalHandler}>
                <h2 className={cls.modalTitle}>Создание упражнения</h2>
                <div className={cls.inputWrapper}>
                    <label htmlFor="exerciseName">Название</label>
                    <Input id={"exerciseName"} type={"text"} name={"exerciseName"} />
                </div>
                <Select name="equipment">
                    <option value="none" selected disabled>Оборудование</option>
                </Select>
                <Select name="muscle">
                    <option value="none" selected disabled>Мышечная группа</option>
                </Select>
                <Button>Создать</Button>
            </Modal>
        </div>
    )
}