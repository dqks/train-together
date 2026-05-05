import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ExerciseCard, getExerciseIsLoading } from '@/entities/Exercise';
import type { ExerciseInformation } from '@/entities/Exercise/model/types/exerciseSchema.ts';
import { fetchMyExercises } from '@/entities/Exercise/model/services/fecthMyExercises/fecthMyExercises.ts';
import { getMyExercises } from '@/entities/Exercise/model/selectors/getMyExercises/getMyExercises.ts';
import { CenterText } from '@/shared/ui/CenterText/CenterText.tsx';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';

export const MyExerciseCardList = () => {
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

    if (isLoading) {
        return <PageLoader />;
    }

    const cards = myExercises
        ?.map(
            (card: ExerciseInformation) => (
                <ExerciseCard
                    key={card.id}
                    name={card.name}
                    exerciseId={card.id}
                    imageUrl={card.image}
                    secondaryMuscles={card.secondaryMuscles}
                    primaryMuscle={card.primaryMuscle}
                />
            ),
        );

    return (
        <div className="grid grid-3 mt-lg">
            {cards}
        </div>
    );
};
