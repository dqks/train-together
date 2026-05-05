import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMuscleList } from '@/entities/Muscle/model/services/fetchMuscleList/fetchMuscleList.ts';
import { getPrimaryMuscleList } from '@/entities/Muscle/model/selectors/getPrimaryMuscleList/getPrimaryMuscleList.ts';
import { PrimaryMuscleCard } from '@/entities/Muscle';

export const PrimaryMuscleCardList = () => {
    const dispatch = useDispatch();
    const muscleList = useSelector(getPrimaryMuscleList);
    useEffect(() => {
        if (!muscleList) {
            dispatch(fetchMuscleList());
        }
    }, [dispatch]);

    return muscleList?.map((muscle) => (
        <PrimaryMuscleCard
            key={muscle.id}
            id={muscle.id}
            name={muscle.name}
        />
    ));
};
