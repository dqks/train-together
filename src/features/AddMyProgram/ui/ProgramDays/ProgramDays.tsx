import { useTranslation } from "react-i18next";
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import cls from "./ProgramDays.module.scss"
import { Button } from "../../../../shared/ui/Button/Button.tsx";

interface ProgramDaysProps {
    className?: string;
}

export const ProgramDays = ({className} : ProgramDaysProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.ProgramDays, {}, [className])}>
            <h1 className={cls.title}>{t("На сколько дней создавать программу")}</h1>
            <div className={cls.buttonWrapper}>
                <Button type="button" isOutlined={true}>
                    2
                </Button>
                <Button type="button" isOutlined={true}>
                    3
                </Button>
                <Button type="button" isOutlined={true}>
                    4
                </Button>
            </div>
        </div>
    )
}