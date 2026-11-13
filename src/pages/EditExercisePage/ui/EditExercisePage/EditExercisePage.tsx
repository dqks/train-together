import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import cls from './EditExercisePage.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import LeftArrow from '@/shared/assets/icons/leftArrow.svg?react';
import { EditExercise } from '@/features/EditExercise';


export const EditExercisePage = () => {
    const { t } = useTranslation();
    const params = useParams();

    if (!params.id) {
        return null
    }

    return (
        <div className={classNames(cls.EditMode, {}, [])}>
            <div className={cls.editHeader}>
                <div className={cls.editHeaderLeft}>
                    <AppLink 
                        className={cls.backLink} 
                        to={AuthRoutePath.exercises}
                    >
                        <LeftArrow className={cls.backLinkSvg} />
                        {t('Назад к упражнениям')}
                    </AppLink>
                    <h1 className="page-title">
                        {t('Редактирование упражнения')}
                    </h1>
                </div>
            </div>
            <div className={cls.editContainer}>
                <div className={cls.editCard}>
                    <EditExercise
                        id={Number(params.id)}
                    />
                </div>
            </div>
        </div>
    );
};
