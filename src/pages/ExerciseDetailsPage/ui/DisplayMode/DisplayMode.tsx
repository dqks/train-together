import { useTranslation } from 'react-i18next';
import { type Params, useLocation } from 'react-router';
import cls from './DisplayMode.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { Badge } from '@/shared/ui/Badge/Badge.tsx';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { DeleteExerciseButton } from '@/features/DeleteExercise';
import LeftArrow from '@/shared/assets/icons/leftArrow.svg?react';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import type { ExerciseDetails } from '@/entities/Exercise';
import { Advices } from './Advices/Advices';
import { Technique } from './Technique/Technique.tsx';
import { ActiveMuscles } from './ActiveMuscles/ActiveMuscles';

interface DisplayModeProps {
    className?: string;
    setEditMode: () => void,
    isOwner: boolean
    exerciseDetails: ExerciseDetails | null
    params: Params<string>
}

export const DisplayMode = (props : DisplayModeProps) => {
    const { t, i18n } = useTranslation();

    const {
        className,
        setEditMode,
        isOwner,
        exerciseDetails,
        params,
    } = props;

    const location = useLocation();

    return (
        <>
            <AppLink className={cls.backLink} to={AuthRoutePath.exercises}>
                <LeftArrow className={cls.backLinkSvg} />
                {t('К списку упражнений')}
            </AppLink>
            <div className={classNames(cls.DisplayMode, {}, [className])}>
                <div className={cls.exerciseHero}>
                    {
                        exerciseDetails?.image
                            && (
                                <img
                                    alt={t('Изображение упражнения')}
                                    src={exerciseDetails.image}
                                    className={cls.exercisePicture}
                                />
                            )
                    }
                </div>
                <div className={cls.exerciseHeader}>
                    <h1 className={cls.exerciseTitle}>
                        {/* {i18n.language === 'en' ? exerciseDetails?.nameEng :  exerciseDetails?.name} */}
                        {exerciseDetails?.name}
                    </h1>
                    <div className={cls.meta}>
                        <Badge
                            className={cls.exerciseBadge}
                            text={
                                i18n.language === 'en'
                                    ? exerciseDetails?.equipment?.nameEng
                                    : exerciseDetails?.equipment?.name
                            }
                        />
                    </div>
                </div>
                {exerciseDetails?.description && (
                    <div className={cls.exerciseSection}>
                        <h2 className={cls.sectionTitle}>{t('Описание')}</h2>
                        <p className={cls.exerciseDescription}>
                            <strong className={cls.strong}>{exerciseDetails?.name}</strong>
                            {' '}
                            -
                            {' '}
                            {exerciseDetails?.description}
                        </p>
                    </div>
                )}
                <Technique technique={exerciseDetails?.technique} />
                <Advices advices={exerciseDetails?.advice} />
                <ActiveMuscles
                    primaryMuscle={exerciseDetails?.primaryMuscle}
                    secondaryMuscles={exerciseDetails?.secondaryMuscles}
                />
                {
                    isOwner && (
                        <div className={cls.exerciseSection}>
                            <h2 className={cls.sectionTitle}>{t('Управление упражнением')}</h2>
                            <div className={cls.exerciseManagement}>
                                <Button
                                    theme={ThemeButton.PRIMARY}
                                    type="button"
                                    onClick={setEditMode}
                                >
                                    {t('Редактировать')}
                                </Button>
                                <DeleteExerciseButton
                                    exerciseId={Number(params.id)}
                                    redirectRoute={location.state?.from || AuthRoutePath.my_exercises}
                                />
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};
