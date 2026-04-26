import { useTranslation } from 'react-i18next';
import { useLocation, useOutletContext, useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '../../../../shared/lib/classNames/classNames.ts';
import { usePageTitle } from '../../../../shared/lib/usePageTItle/usePageTitle.ts';
import cls from './ExerciseDetailsPage.module.scss';
import { ExerciseInfo } from '../ExerciseInfo/ExerciseInfo.tsx';
import { ExerciseNote } from '../ExerciseNote/ExerciseNote.tsx';
import type { AppContextType } from '../../../../app/layout/AppLayout/ui/AppLayout.tsx';
import { AuthRoutePath } from '../../../../shared/config/routeConfig/authRouteConfig.tsx';
import Picture from '../../../../shared/assets/icons/picture.svg?react';
import { fetchExerciseDetails, getExerciseDetails, getExerciseIsLoading } from '@/entities/Exercise';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { getUserId } from '@/entities/User';
import { DeleteExerciseButton } from '@/features/DeleteExercise';
import {
    getExerciseErrors,
} from '@/entities/Exercise/model/selectors/getExerciseErrors/getExerciseErrors.ts';
import { NotFound } from '@/shared/ui/NotFound/NotFound.tsx';

// import { DeleteExerciseButton } from '@/features/DeleteExercise';

interface ExercisePageProps {
    className?: string;
}

const ExerciseDetailsPage = ({ className } : ExercisePageProps) => {
    const { t } = useTranslation();
    const context : AppContextType = useOutletContext();
    const params = useParams();
    const dispatch = useDispatch();

    const exerciseDetails = useSelector(getExerciseDetails);
    const isLoading = useSelector(getExerciseIsLoading);
    const userId = useSelector(getUserId);
    const errors = useSelector(getExerciseErrors);
    const isOwner = userId === exerciseDetails?.userId;

    const location = useLocation();

    usePageTitle('', t, false);

    useEffect(() => {
        if (location.state?.from) {
            context.setBackButton(location.state?.from);
        } else {
            context.setBackButton(AuthRoutePath.exercises);
        }
        return () => {
            context.setBackButton('');
        };
    }, [context]);

    useEffect(() => {
        dispatch(fetchExerciseDetails(Number(params.id)));
    }, [dispatch]);

    if (isLoading) {
        return <PageLoader />;
    }

    if (errors) {
        return <NotFound message={errors.status[0]} />;
    }

    return (
        <div className={classNames(cls.ExercisePage, {}, [className])}>
            {
                isOwner
                && (
                    <DeleteExerciseButton
                        redirectRoute={location.state?.from || AuthRoutePath.my_exercises}
                        exerciseId={Number(params.id)}
                    />
                )
            }
            <div className={cls.mainInfoWrapper}>
                <h1 className={cls.exerciseName}>{exerciseDetails?.name}</h1>
                <Picture />
            </div>
            <div className={cls.informationWrapper}>
                <ExerciseInfo title={t('Техника выполнения')}>
                    <ol>
                        <li>Первый пункт</li>
                        <li>Второй пункт</li>
                        <li>Третий пункт</li>
                    </ol>
                </ExerciseInfo>
                <ExerciseInfo title={t('Мышцы')}>
                    <p>Грудь, трицепс, передняя дельта</p>
                </ExerciseInfo>
                <ExerciseInfo title={t('Оборудование')}>
                    <p>Штанга, горизонтальная скамья</p>
                </ExerciseInfo>
                <ExerciseInfo title={t('Советы')}>
                    <ol>
                        <li>Первый пункт</li>
                        <li>Второй пункт</li>
                        <li>Третий пункт</li>
                    </ol>
                </ExerciseInfo>
            </div>
            <ExerciseNote />
        </div>
    );
};

export default ExerciseDetailsPage;
