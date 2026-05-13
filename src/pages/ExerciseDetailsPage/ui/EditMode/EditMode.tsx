import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './EditMode.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import LeftArrow from '@/shared/assets/icons/leftArrow.svg?react';
import { EditExercise } from '@/features/EditExercise';
import type { ExerciseDetails } from '@/entities/Exercise';

interface EditModeProps {
    className?: string;
    exerciseDetails: ExerciseDetails | null
    setDisplayMode: () => void
}

export const EditMode = (props : EditModeProps) => {
    const { t } = useTranslation();
    const { setDisplayMode, className, exerciseDetails } = props;
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
            </div>
            <div className={cls.editContainer}>
                <div className={cls.editCard}>
                    <EditExercise
                        exerciseDetails={exerciseDetails}
                        setDisplayMode={setDisplayMode}
                    />
                </div>
            </div>
        </div>
    );
};
