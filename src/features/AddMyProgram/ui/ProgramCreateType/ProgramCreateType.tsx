import { useTranslation } from "react-i18next";
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { Button } from "../../../../shared/ui/Button/Button.tsx";
import cls from "./ProgramCreateType.module.scss"

interface ProgramCreateTypeProps {
    className?: string;
}

export const ProgramCreateType = ({className} : ProgramCreateTypeProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ProgramCreateType, {}, [className])}>
                <h1>Как вы хотите создать программу?</h1>
                <div className={cls.buttonWrapper}>
                    <Button>{t("Автоматически")}</Button>
                    <Button>{t("Самостоятельно")}</Button>
                </div>
        </div>
    )
}