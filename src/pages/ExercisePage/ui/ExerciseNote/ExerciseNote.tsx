import { useTranslation } from "react-i18next";
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import cls from "./ExerciseNote.module.scss"

interface ExerciseNoteProps {
    className?: string;
}

export const ExerciseNote = ({
    className, 
} : ExerciseNoteProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ExerciseNote, {}, [className])}>
            <h2 className={cls.title}>{t("Личная заметка")}</h2>
            <textarea
                className={cls.textarea}
                id="exerciseNote" 
                name="exerciseNote" 
                placeholder={t("Текст заметки")}
            />
        </div>
    )
}