import { useTranslation } from 'react-i18next';
import cls from './ExerciseCardList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { ExerciseCard } from '@/entities/Exercise';
import type { Exercise } from '@/entities/Exercise/model/types/exerciseSchema.ts';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { CenterText } from '@/shared/ui/CenterText/CenterText.tsx';

interface ExerciseCardListProps {
    exercises: Exercise[] | undefined;
    isLoading: boolean;
    error?: string
    className?: string
}

export const ExerciseCardList = (props: ExerciseCardListProps) => {
    const { t } = useTranslation();
    const {
        isLoading,
        exercises,
        error = 'У вас нет упражнений',
        className,
    } = props;

    if (isLoading) {
        return <PageLoader />;
    }

    if (exercises && exercises.length <= 0) {
        return (
            <CenterText
                className={cls.centerText}
                text={t('Упсс...')}
                subText={t(error)}
            />
        );
    }

    // Создание карточек
    const cards = exercises
        ?.map(
            (exercise: Exercise) => (
                <ExerciseCard
                    imageUrl={exercise.image}
                    key={exercise.id}
                    name={exercise.name}
                    secondaryMuscles={exercise.secondaryMuscles}
                    primaryMuscle={exercise.primaryMuscle}
                    exerciseId={exercise.id}
                />
            ),
        );

    // Возвращаем разметку
    return (
        <div className={classNames(cls.ExerciseCardList, {}, ['grid grid-3 mt-lg', className])}>
            {cards}
        </div>
    );
};
