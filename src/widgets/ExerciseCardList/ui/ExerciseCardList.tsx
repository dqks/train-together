import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import cls from './ExerciseCardList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import {
    ExerciseCard, getExerciseCards, getExerciseIsLoading, fetchExerciseCards,
} from '@/entities/Exercise';
import type { ExerciseInformation } from '@/entities/Exercise/model/types/exerciseSchema.ts';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';

export const ExerciseCardList = () => {
    const dispatch = useDispatch();
    const exerciseCards = useSelector(getExerciseCards);
    const isLoading = useSelector(getExerciseIsLoading);

    useEffect(() => {
        dispatch(fetchExerciseCards());
    }, [dispatch]);

    const cards = exerciseCards
        ?.map(
            (card: ExerciseInformation) => (
                <ExerciseCard
                    imageUrl={card.image}
                    key={card.id}
                    name={card.name}
                    secondaryMuscles={card.secondaryMuscles}
                    primaryMuscle={card.primaryMuscle}
                    exerciseId={card.id}
                />
            ),
        );

    if (isLoading) {
        return <PageLoader />;
    }

    return (
        <div className={classNames(cls.ExerciseCardList, {}, ['grid grid-3 mt-lg'])}>
            {cards}
        </div>
    );
};
