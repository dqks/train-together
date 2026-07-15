import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import cls from './EditExercisePage.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import LeftArrow from '@/shared/assets/icons/leftArrow.svg?react';
import { EditExercise } from '@/features/EditExercise';
import {
    fetchExerciseDetails,
    getExerciseDetails,
    getExerciseErrors,
    getExerciseIsLoading,
} from '@/entities/Exercise';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { CenterText } from '@/shared/ui/CenterText/CenterText.tsx';

export const EditExercisePage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const exerciseDetails = useSelector(getExerciseDetails);
    const isLoading = useSelector(getExerciseIsLoading);
    const errors = useSelector(getExerciseErrors);
    const params = useParams();
    const { state } = useLocation();

    useEffect(() => {
        if (!state) dispatch(fetchExerciseDetails(Number(params.id)));
    }, [dispatch]);

    if (isLoading) {
        return <PageLoader />;
    }

    if (errors) {
        return <CenterText text={errors.status[0]} />;
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
                        exerciseDetails={state || exerciseDetails}
                    />
                </div>
            </div>
        </div>
    );
};
