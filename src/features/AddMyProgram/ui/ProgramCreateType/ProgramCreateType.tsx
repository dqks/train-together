import { useTranslation } from "react-i18next";
import { classNames } from "../../../../shared/lib/classNames/classNames.ts";
import { Button } from "../../../../shared/ui/Button/Button.tsx";
import cls from "./ProgramCreateType.module.scss"
import { Modal } from "../../provider/lib/ModalContext.tsx";

interface ProgramCreateTypeProps {
    className?: string;
    setModal: ((modal: Modal) => void) | undefined;
}

export const ProgramCreateType = ({className, setModal} : ProgramCreateTypeProps) => {
    const { t } = useTranslation();

    const autoHandler = () => {
        if (setModal)
            setModal(Modal.PURPOSES)
    }

    const ownHandler = () => {
        if (setModal)
            setModal(Modal.FORM)
    }

    return (
        <div className={classNames(cls.ProgramCreateType, {}, [className])}>
            <h2 className={cls.title}>{t("Как вы хотите создать программу?")}</h2>
            <div className={cls.buttonWrapper}>
                <Button onClick={autoHandler} type="button">
                    {t("Автоматически")}
                </Button>
                <Button onClick={ownHandler} type="button">
                    {t("Самостоятельно")}
                </Button>
            </div>
        </div>
    )
}