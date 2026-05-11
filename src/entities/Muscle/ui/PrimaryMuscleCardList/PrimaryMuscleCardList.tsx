import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMuscleList, PrimaryMuscleCard, getPrimaryMuscleList } from '@/entities/Muscle';

interface PrimaryMuscleCardListProps {
    onChange: (value: string) => void
}

export const PrimaryMuscleCardList = ({ onChange }: PrimaryMuscleCardListProps) => {
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
        />
    ));
};
