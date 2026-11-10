import cls from './SelectableExerciseCard.module.scss';
import type { Exercise } from '@/entities/Exercise';
import { Card } from '@/shared/ui/Card/Card.tsx';
import { Tag, TagType } from '@/shared/ui/Tag/Tag';

interface SelectableExerciseCardProps {
    isSelected?: boolean;
    toggleSelected: (id: number | undefined) => void;
    exercise?: Exercise
}

export const SelectableExerciseCard = (props : SelectableExerciseCardProps) => {
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
                <div className={cls.exerciseMuscles}>
                    <Tag name={exercise?.primaryMuscle?.name} type={TagType.PRIMARY} />
                    {
                        exercise?.secondaryMuscles 
                        ? (
                            exercise?.secondaryMuscles.map((m) => (
                                <Tag name={m.name} key={m.id} />
                            )) 
                        ) : null
                    }
                </div>
            </div>
        </Card>
    );
};
