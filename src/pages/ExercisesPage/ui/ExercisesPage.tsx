import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './ExercisesPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { ExerciseCardList } from '@/widgets/ExerciseCardList';
import { ExercisesControl } from '@/widgets/ExercisesControl';
import { fetchExerciseCards, getExerciseCards, getExerciseIsLoading } from '@/entities/Exercise';

const ExercisesPage = () => {
    const { t } = useTranslation();
    const exerciseCards = useSelector(getExerciseCards);
    const dispatch = useDispatch();
    const isLoading = useSelector(getExerciseIsLoading);

    // Отправка запроса на сервер
    // для получения упражнений
    useEffect(() => {
        dispatch(fetchExerciseCards());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ExercisesPage, {}, [])}>
            <div className="page-header-row">
                <div>
                    <h1 className="page-title">{t('Упражнения')}</h1>
                    <p className="page-subtitle">{t('Найдите упражнение по мышцам или оборудованию')}</p>
                </div>
            </div>
            <ExercisesControl exerciseCount={exerciseCards?.length} />
            <ExerciseCardList
                isLoading={isLoading}
                exerciseCards={exerciseCards}
            />
        </div>
    );
};

export default ExercisesPage;
