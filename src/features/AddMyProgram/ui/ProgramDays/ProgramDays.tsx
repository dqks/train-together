import { useTranslation } from 'react-i18next';
import { classNames } from '../../../../shared/lib/classNames/classNames.ts';
import cls from './ProgramDays.module.scss';
import { Button } from '../../../../shared/ui/Button/Button.tsx';
import { Modal } from '../../provider/lib/ModalContext.tsx';

interface ProgramDaysProps {
    className?: string;
    setModal: ((modal: Modal) => void) | undefined;
}

export const ProgramDays = ({ className, setModal } : ProgramDaysProps) => {
    const { t } = useTranslation();

    const clickHandler = () => {
        if (setModal) { setModal(Modal.FORM); }
    };

    return (
        <div className={classNames(cls.ProgramDays, {}, [className])}>
            <h2 className={cls.title}>{t('На сколько дней создавать программу')}</h2>
            <div className={cls.buttonWrapper}>
                <Button onClick={clickHandler} type="button" isOutlined>
                    2
                </Button>
                <Button onClick={clickHandler} type="button" isOutlined>
                    3
                </Button>
                <Button onClick={clickHandler} type="button" isOutlined>
                    4
                </Button>
            </div>
        </div>
    );
};
