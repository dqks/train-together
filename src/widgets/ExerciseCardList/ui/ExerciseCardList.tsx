import cls from './ExerciseCardList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { ExerciseCard } from '@/entities/Exercise';
import type { ExerciseInformation } from '@/entities/Exercise/model/types/exerciseSchema.ts';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';

interface ExerciseCardListProps {
    exerciseCards: ExerciseInformation[] | undefined;
    isLoading: boolean;
}

export const ExerciseCardList = (props: ExerciseCardListProps) => {
    const { isLoading, exerciseCards } = props;

    // Создание карточек
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

    // Если идет загрузка
    // то показываем лоадер
    if (isLoading) {
        return <PageLoader />;
    }

    // Возвращаем разметку
    return (
        <div className={classNames(cls.ExerciseCardList, {}, ['grid grid-3 mt-lg'])}>
            {cards}
        </div>
    );
};
