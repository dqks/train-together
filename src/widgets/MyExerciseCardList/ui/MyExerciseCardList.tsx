import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import cls from './MyExerciseCardList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { ExerciseCard, getExerciseIsLoading } from '@/entities/Exercise';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';
import type { ExerciseInformation } from '@/entities/Exercise/model/types/exerciseSchema.ts';
import { fetchMyExercises } from '@/entities/Exercise/model/services/fecthMyExercises/fecthMyExercises.ts';
import { getMyExercises } from '@/entities/Exercise/model/selectors/getMyExercises/getMyExercises.ts';

interface ExerciseCardListProps {
    className?: string;
}

export const MyExerciseCardList = ({ className } : ExerciseCardListProps) => {
    const dispatch = useDispatch();
    const myExercises = useSelector(getMyExercises);
    const isLoading = useSelector(getExerciseIsLoading);

    useEffect(() => {
        dispatch(fetchMyExercises());
    }, [dispatch]);

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
