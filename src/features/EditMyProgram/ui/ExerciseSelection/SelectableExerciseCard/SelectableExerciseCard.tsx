import { useTranslation } from 'react-i18next';
import cls from './SelectableExerciseCard.module.scss';
import type { Exercise } from '@/entities/Exercise';
import { Card } from '@/shared/ui/Card/Card.tsx';

interface SelectableExerciseCardProps {
    isSelected?: boolean;
    toggleSelected: (id: number | undefined) => void;
    exercise?: Exercise
}

export const SelectableExerciseCard = (props : SelectableExerciseCardProps) => {
    const { t } = useTranslation();
    const { exercise, isSelected, toggleSelected } = props;
    return (
        <Card
            className={`${cls.exerciseCard} ${isSelected ? cls.isSelected : ''}`}
            onClick={() => toggleSelected(exercise?.id)}
        >
            <span className={cls.selectIndicator} aria-hidden="true">
                ✓
            </span>

            <div className={cls.exerciseCardImage}>
                <img className={cls.image} src={exercise?.image} alt={exercise?.name} />
            </div>

            <div className="card-body">
                <h4 className={cls.cardTitle}>{exercise?.name}</h4>
                {/* <div className={cls.exerciseMuscles}> */}
                {/*    {ex.muscles.slice(0, 3).map((m) => ( */}
                {/*        <span key={m} className={cls.tag}> */}
                {/*            {LABELS_MUSCLES[m] ?? m} */}
                {/*        </span> */}
                {/*    ))} */}
                {/* </div> */}
            </div>
        </Card>
    );
};
