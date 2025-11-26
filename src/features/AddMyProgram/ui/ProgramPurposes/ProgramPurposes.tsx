import { useTranslation } from "react-i18next";
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import cls from "./ProgramPurposes.module.scss"
import { Button } from "../../../../shared/ui/Button/Button.tsx";

interface ProgramPurposesProps {
    className?: string;
}

export const ProgramPurposes = ({className} : ProgramPurposesProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.ProgramPurposes, {}, [className])}>
            <h1 className={cls.title}>{t("Какой цели вы хотите достигнуть с помощью программы?")}</h1>
            <div className={cls.buttonWrapper}>
                <Button type="button" isOutlined={true}>
                    {t("Набрать мышечную массу")}
                </Button>
                <Button type="button" isOutlined={true}>
                    {t("Увеличить силовые показатели")}
                </Button>
                <Button type="button" isOutlined={true}>
                    {t("Увеличить вертикальный прыжок")}
                </Button>
                <Button type="button" isOutlined={true}>
                    {t("Улучшить атлетизм")}
                </Button>
            </div>
        </div>
    )
}