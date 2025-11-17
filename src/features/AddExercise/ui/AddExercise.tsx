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
            <Modal isOpen={isOpen} onOutsideClick={modalHandler}>
                <h2>Создание упражнения</h2>
                <label htmlFor=""></label>
                <Input id={""} type={""} name={""} />
                <Select name="equipment">
                    <option value="none" selected disabled>Оборудование</option>
                </Select>
                <Select name="muscle">
                    <option value="none" selected disabled>Мышечная группа</option>
                </Select>
                <Button>Войти</Button>
            </Modal>
        </div>
    )
}