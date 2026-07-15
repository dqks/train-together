import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router';
import cls from './ExercisesPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { ExerciseCardList } from '@/widgets/ExerciseCardList';
import { ExercisesControl } from '@/widgets/ExercisesControl';
import { fetchExerciseCards, getExerciseCards, getExerciseIsLoading } from '@/entities/Exercise';
import { useTabTitle } from '@/shared/lib/useTabTitle/useTabTitle.ts';

const ExercisesPage = () => {
    const { t } = useTranslation();
    const exerciseCards = useSelector(getExerciseCards);
    const dispatch = useDispatch();
    const isLoading = useSelector(getExerciseIsLoading);
    const [searchParams] = useSearchParams();

    // Отправка запроса на сервер
    // для получения упражнений
    useEffect(() => {
        const equipmentId = searchParams.get('equipmentId');
        const primaryMuscleId = searchParams.get('primaryMuscles');
        dispatch(fetchExerciseCards({ equipmentId, primaryMuscles: primaryMuscleId }));
    }, [dispatch]);

    useTabTitle('Упражнения');

    return (
        <div className={classNames(cls.ExercisesPage, {}, [])}>
            <div className="page-header-row">
                <div>
                    <h1 className="page-title">{t('Упражнения')}</h1>
                    <p className="page-subtitle">{t('Найдите упражнение по мышцам или оборудованию')}</p>
                </div>
            </div>
            <ExercisesControl
                exerciseCount={exerciseCards?.length}
            />
            <ExerciseCardList
                isLoading={isLoading}
                exercises={exerciseCards}
            />
        </div>
    );
};

export default ExercisesPage;
