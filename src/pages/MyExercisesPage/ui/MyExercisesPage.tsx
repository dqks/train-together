import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import cls from './MyExercisesPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { AddExerciseButton } from '@/features/AddExercise';
import { ExerciseCardList } from '@/widgets/ExerciseCardList';
import { getMyExercises } from '@/entities/Exercise/model/selectors/getMyExercises/getMyExercises.ts';
import { getExerciseIsLoading } from '@/entities/Exercise';
import { fetchMyExercises } from '@/entities/Exercise/model/services/fecthMyExercises/fecthMyExercises.ts';
import { useTabTitle } from '@/shared/lib/useTabTitle/useTabTitle.ts';

interface ExercisesPageProps {
    className?: string;
}

const MyExercisesPage = ({ className } : ExercisesPageProps) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const myExercises = useSelector(getMyExercises);
    const isLoading = useSelector(getExerciseIsLoading);

    useEffect(() => {
        dispatch(fetchMyExercises());
    }, [dispatch]);

    useTabTitle('Мои упражнения');

    return (
        <div className={classNames(cls.ExercisesPage, {}, [className])}>
            <div className={cls.pageHeaderContent}>
                <div>
                    <h1 className="page-title">{t('Ваши упражнения')}</h1>
                    <p className="page-subtitle">
                        {t('Создавайте и управляйте своими упражнениями')}
                    </p>
                </div>
                <AddExerciseButton />
            </div>
            <ExerciseCardList exercises={myExercises} isLoading={isLoading} />
        </div>
    );
};

export default MyExercisesPage;
