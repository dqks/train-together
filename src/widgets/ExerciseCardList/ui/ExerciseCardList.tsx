import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import cls from './ExerciseCardList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { ExerciseCard, getExerciseCards, getExerciseIsLoading } from '@/entities/Exercise';
import { fetchExerciseCards } from '@/entities/Exercise/model/services/fetchExerciseCards.ts';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';
import type { ExerciseCardInformation } from '@/entities/Exercise/model/types/exerciseSchema.ts';

interface ExerciseCardListProps {
    className?: string;
}

export const ExerciseCardList = ({ className } : ExerciseCardListProps) => {
    const dispatch = useDispatch();
    const exerciseCards = useSelector(getExerciseCards);
    const isLoading = useSelector(getExerciseIsLoading);

    useEffect(() => {
        dispatch(fetchExerciseCards(null));
    }, [dispatch]);

    const cards = exerciseCards
        ?.map((card: ExerciseCardInformation) => <ExerciseCard key={card.id} name={card.name} />);

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
