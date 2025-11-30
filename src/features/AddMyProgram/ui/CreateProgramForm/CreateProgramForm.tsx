import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import cls from "./CreateProgramForm.module.scss"
import { Button } from "../../../../shared/ui/Button/Button";
import { Input } from "../../../../shared/ui/Input/Input";
import { Textarea } from "../../../../shared/ui/Textarea/Textarea";
import { Select } from "../../../../shared/ui/Select/Select";
import { useTranslation } from "react-i18next";

interface CreateProgramFormProps {
    className?: string;
}

export const CreateProgramForm = ({className}: CreateProgramFormProps) => {
    const { t } = useTranslation();
    return (
        <form className={classNames(cls.CreateProgramForm, {}, [className])}>
            <h1>{t("Создание программы")}</h1>
            <div className={cls.inputWrapper}>
                <label htmlFor="name">{t("Название")}</label>
                <Input type="text" name="name" id="name"/>
            </div>
            <div className={cls.inputWrapper}>
                <label htmlFor="description">{t("Описание")}</label>
                <Textarea
                    className={cls.textarea}
                    id="description"
                    name="description"
                />
            </div>
            <div className={cls.privacyWrapper}>
                <label htmlFor="privacy">
                    {t("Кто сможет просматривать")}
                </label>
                <span>❓</span>
                <Select name="privacy" id="privacy">
                    <option value="allUsers">{t("Все пользователи")}</option>
                    <option value="onlyMe">{t("Только я")}</option>
                </Select>
            </div>
            <Button type="button">{t("Создать")}</Button>
        </form>
    )
}