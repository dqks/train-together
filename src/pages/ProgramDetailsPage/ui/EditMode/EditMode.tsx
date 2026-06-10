import { useTranslation } from 'react-i18next';
import cls from './EditMode.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { BackLink } from '@/shared/ui/BackLink/BackLink.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import Save from '@/shared/assets/icons/save.svg?react';

interface EditModeProps {
    className?: string;
    setIsEditMode: (value: boolean) => void
}

export const EditMode = (props : EditModeProps) => {
    const { t } = useTranslation();

    const { className, setIsEditMode } = props;

    return (
        <div className={classNames(cls.EditMode, {}, [className])}>

            <div className={cls.editHeader}>
                <div className={cls.editHeaderLeft}>
                    <BackLink className={cls.backLink} text="Назад" to={AuthRoutePath.programs} />
                    <h1 className={cls.pageTitle}>{t('Редактирование программы')}</h1>
                </div>
                <div className={cls.editHeaderActions}>
                    <Button
                        onClick={() => setIsEditMode(false)}
                        theme={ThemeButton.OUTLINE}
                        type="button"
                    >
                        {t('Отмена')}
                    </Button>
                    <Button type="button">
                        <Save />
                        {t('Сохранить')}
                    </Button>
                </div>
            </div>

        </div>
    );
};
