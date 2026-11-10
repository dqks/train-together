import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import cls from './EditExercisePage.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import LeftArrow from '@/shared/assets/icons/leftArrow.svg?react';
import { EditExercise } from '@/features/EditExercise';
import {
    fetchExerciseDetails,
    getExerciseDetails,
    getExerciseDetailsError,
    getExerciseDetailsIsLoading,
} from '@/entities/Exercise';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { CenterText } from '@/shared/ui/CenterText/CenterText.tsx';
import { getUserId } from '@/entities/User';

export const EditExercisePage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const userId = useSelector(getUserId);
    const exerciseDetails = useSelector(getExerciseDetails);
    const isLoading = useSelector(getExerciseDetailsIsLoading);
    const errors = useSelector(getExerciseDetailsError);
    const params = useParams();

    useEffect(() => {
        dispatch(fetchExerciseDetails(Number(params.id)));
    }, [dispatch, exerciseDetails?.userId, params.id, userId]);

    if (isLoading) {
        return <PageLoader />;
    }

    if (errors) {
        return <CenterText text={errors.status[0]} />;
    }

    if (exerciseDetails?.userId !== userId && exerciseDetails?.userId !== undefined) {
        return null;
    }

    return (
        <div className={classNames(cls.EditMode, {}, [])}>
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
                    />
                </div>
            </div>
        </div>
    );
};
