// import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import cls from "./CreateProgramForm.module.scss"
import { Button } from "../../../../shared/ui/Button/Button";
import { Input } from "../../../../shared/ui/Input/Input";
import { Textarea } from "../../../../shared/ui/Textarea/Textarea";
import { Select } from "../../../../shared/ui/Select/Select";

interface CreateProgramFormProps {
    className?: string;
}

export const CreateProgramForm = ({className} : CreateProgramFormProps) => {
    return (
        <form className={cls.CreateProgramForm}>
            <h1>Создание программы</h1>
            <div className={cls.inputWrapper}>
                <label htmlFor="name">Название</label>
                <Input type="text" name="name" id="name"/>
            </div>
            <div className={cls.inputWrapper}>
                <label htmlFor="description">Описание</label>
                <Textarea 
                    className={cls.textarea} 
                    id="description" 
                    name="description"
                />
            </div>
            <div className={cls.privacyWrapper}>
                <label htmlFor="privacy">
                    Кто сможет просматривать 
                </label>
                <span>❓</span>
                <Select name="privacy" id="privacy">
                    <option value="allUsers">Все пользователи</option>
                    <option value="onlyMe">Только я</option>
                </Select>
            </div>
            <Button type="button">Создать</Button>
        </form>
    )
}