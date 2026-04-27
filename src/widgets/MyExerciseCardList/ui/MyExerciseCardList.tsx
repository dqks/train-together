import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './MyExerciseCardList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { ExerciseCard, getExerciseIsLoading } from '@/entities/Exercise';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';
import type { ExerciseInformation } from '@/entities/Exercise/model/types/exerciseSchema.ts';
import { fetchMyExercises } from '@/entities/Exercise/model/services/fecthMyExercises/fecthMyExercises.ts';
import { getMyExercises } from '@/entities/Exercise/model/selectors/getMyExercises/getMyExercises.ts';
import { CenterText } from '@/shared/ui/CenterText/CenterText.tsx';

interface ExerciseCardListProps {
    className?: string;
}

export const MyExerciseCardList = ({ className } : ExerciseCardListProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const myExercises = useSelector(getMyExercises);
    const isLoading = useSelector(getExerciseIsLoading);

    useEffect(() => {
        dispatch(fetchMyExercises());
    }, [dispatch]);

    if (myExercises && myExercises.length <= 0) {
        return <CenterText text={t('Упсс...')} subText={t('У вас нет упражнений')} />;
    }

    const cards = myExercises
        ?.map(
            (card: ExerciseInformation) => (
                <ExerciseCard
                    key={card.id}
                    name={card.name}
                    muscles={card.muscles}
                    exerciseId={card.id}
                />
            ),
        );

    return (
        <div className={classNames(cls.ExerciseCardList, {}, [className])}>
            {
                !isLoading
                    ? (
                        <>
                            {cards}
                        </>
                    )
                    : (<Loader />)
            }
        </div>
    );
};
