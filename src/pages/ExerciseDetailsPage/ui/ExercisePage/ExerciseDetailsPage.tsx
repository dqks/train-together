import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import {
    fetchExerciseDetails,
    getExerciseDetails,
    getExerciseErrors,
    getExerciseIsLoading,
} from '@/entities/Exercise';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { getUserId } from '@/entities/User';
import { CenterText } from '@/shared/ui/CenterText/CenterText.tsx';
import LeftArrow from '@/shared/assets/icons/leftArrow.svg?react';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';
import cls from '@/pages/ExerciseDetailsPage/ui/ExercisePage/ExerciseDetailsPage.module.scss';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { Badge } from '@/shared/ui/Badge/Badge.tsx';
import { Technique } from '@/pages/ExerciseDetailsPage/ui/Technique/Technique.tsx';
import { Advices } from '@/pages/ExerciseDetailsPage/ui/Advices/Advices.tsx';
import { ActiveMuscles } from '@/pages/ExerciseDetailsPage/ui/ActiveMuscles/ActiveMuscles.tsx';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import { DeleteExerciseButton } from '@/features/DeleteExercise';

const ExerciseDetailsPage = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const exerciseDetails = useSelector(getExerciseDetails);
    const isLoading = useSelector(getExerciseIsLoading);
    const userId = useSelector(getUserId);
    const errors = useSelector(getExerciseErrors);
    const isOwner = userId === exerciseDetails?.userId;
    const location = useLocation();

    const params = useParams();

    useEffect(() => {
        dispatch(fetchExerciseDetails(Number(params.id)));
    }, [dispatch]);

    if (isLoading) {
        return <PageLoader />;
    }

    if (errors) {
        return <CenterText text={errors.status[0]} />;
    }

    return (
        <>
            <AppLink className={cls.backLink} to={AuthRoutePath.exercises}>
                <LeftArrow className={cls.backLinkSvg} />
                {t('К списку упражнений')}
            </AppLink>
            <div className={classNames(cls.DisplayMode, {}, [])}>
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
                                <AppLink
                                    to={`${AuthRoutePath.exercise_details}${exerciseDetails?.id}/edit`}
                                    state={exerciseDetails}
                                >
                                    <Button
                                        theme={ThemeButton.PRIMARY}
                                        type="button"
                                    >
                                        {t('Редактировать')}
                                    </Button>
                                </AppLink>
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

export default ExerciseDetailsPage;
