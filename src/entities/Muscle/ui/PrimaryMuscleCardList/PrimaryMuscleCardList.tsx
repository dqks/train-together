import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMuscleList, getPrimaryMuscleList, PrimaryMuscleCard } from '@/entities/Muscle';

interface PrimaryMuscleCardListProps {
    onChange: (value: string) => void
    selectedMuscle?: string;
}

export const PrimaryMuscleCardList = (props: PrimaryMuscleCardListProps) => {
    const { onChange, selectedMuscle } = props;
    const dispatch = useDispatch();
    const muscleList = useSelector(getPrimaryMuscleList);
    useEffect(() => {
        if (!muscleList) {
            dispatch(fetchMuscleList());
        }
    }, [dispatch]);

    return muscleList?.map((muscle) => (
        <PrimaryMuscleCard
            id={muscle.id}
            onChange={onChange}
            key={muscle.id}
            name={muscle.name}
            selectedMuscle={selectedMuscle}
        />
        // TODO find a way to use 1 component for different muscle lists
        // <MuscleCard
        //     id={muscle.id}
        //     onChange={onChange}
        //     key={muscle.id}
        //     muscleName={muscle.name}
        //     value={selectedMuscle}
        //     inputName="muscleInline"
        //     type="radio"
        // />
    ));
};
