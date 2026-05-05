import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EditMode.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import Save from '@/shared/assets/icons/save.svg?react';
import LeftArrow from '@/shared/assets/icons/leftArrow.svg?react';
import { EditExercise } from '@/features/EditExercise';

interface EditModeProps {
    className?: string;
    setDisplayMode: () => void
}

export const EditMode = (props : EditModeProps) => {
    const { t } = useTranslation();
    const { setDisplayMode, className } = props;
    return (
        <div className={classNames(cls.EditMode, {}, [className])}>
            <div className={cls.editHeader}>
                <div className={cls.editHeaderLeft}>
                    <AppLink className={cls.backLink} to={AuthRoutePath.exercises}>
                        <LeftArrow className={cls.backLinkSvg} />
                        {t('Назад к упражнениям')}
                    </AppLink>
                    <h1 className="page-title">
                        {t('Редактирование упражнения')}
                    </h1>
                </div>
                <div className={cls.editHeaderActions}>
                    <Button
                        onClick={setDisplayMode}
                        theme={ThemeButton.OUTLINE}
                        type="button"
                    >
                        {t('Отмена')}
                    </Button>
                    <Button type="button">
                        <Save className={cls.saveIcon} />
                        {t('Сохранить')}
                    </Button>
                </div>
            </div>

            <div className={cls.editContainer}>
                <div className={cls.editCard}>
                    <EditExercise />
                </div>
            </div>
        </div>
    );
};
