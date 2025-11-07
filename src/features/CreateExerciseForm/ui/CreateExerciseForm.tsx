import cls from "./CreateExerciseForm.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Input } from "../../../shared/ui/Input/Input";
import { Button } from "../../../shared/ui/Button/Button.tsx";
import { Chip } from "../../../shared/ui/Chip/Chip.tsx";
import { Select } from "../../../shared/ui/Select/Select.tsx";

interface CreateExerciseFormProps {
    className?: string;
    submitButtonText: string;
}

export const CreateExerciseForm = ({className, submitButtonText}: CreateExerciseFormProps) => {

    return (
        <form
            className={classNames(cls.CreateExerciseForm, {}, [className])}
        >
            <div className={cls.inputWrapper}>
                <label htmlFor="exerciseName">Название</label>
                <Input id="name" type="text" name="exerciseName"/>
            </div>
            <Select>
                <option value="none">Оборудование</option>
            </Select>

            <div className={cls.chipWrapper}>
                <Chip text="Гантели"/>
                <Chip text="Гантели"/>
                <Chip text="Гантели"/>
                <Chip text="Гантели"/>
                <Chip text="Гантели"/>
            </div>

            <Select>
                <option value="none">Мышечная группа</option>
            </Select>

            <div className={cls.chipWrapper}>
                <Chip text="Бицепс"/>
            </div>

            <Button>{submitButtonText}</Button>
                
        </form>
    )
}