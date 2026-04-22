import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import cls from './ExerciseCardList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { ExerciseCard, getExerciseCards, getExerciseIsLoading } from '@/entities/Exercise';
import { fetchExerciseCards } from '@/entities/Exercise/model/services/fetchExerciseCards/fetchExerciseCards.ts';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';
import type { ExerciseInformation } from '@/entities/Exercise/model/types/exerciseSchema.ts';

interface ExerciseCardListProps {
    className?: string;
}

export const ExerciseCardList = ({ className } : ExerciseCardListProps) => {
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
