import { useTranslation } from "react-i18next";
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import cls from "./ProgramPurposes.module.scss"
import { Button } from "../../../../shared/ui/Button/Button";
import { Modal } from "../../provider/lib/ModalContext.tsx";

interface ProgramPurposesProps {
    className?: string;
    setModal: ((modal: Modal) => void) | undefined;
}

export const ProgramPurposes = ({className, setModal} : ProgramPurposesProps) => {
    const {t} = useTranslation();

    const clickHandler = () => {
        if (setModal)
            setModal(Modal.DAYS)
    }

    return (
        <div className={classNames(cls.ProgramPurposes, {}, [className])}>
            <h2 className={cls.title}>
                {t("Какой цели вы хотите достигнуть с помощью программы?")}
            </h2>
            <div className={cls.buttonWrapper}>
                <Button onClick={clickHandler} type="button" isOutlined={true}>
                    {t("Набрать мышечную массу")}
                </Button>
                <Button onClick={clickHandler} type="button" isOutlined={true}>
                    {t("Увеличить силовые показатели")}
                </Button>
                <Button onClick={clickHandler} type="button" isOutlined={true}>
                    {t("Увеличить вертикальный прыжок")}
                </Button>
                <Button onClick={clickHandler} type="button" isOutlined={true}>
                    {t("Улучшить атлетизм")}
                </Button>
            </div>
        </div>
    )
}