import { useSelector } from 'react-redux';
import { SecondaryMuscleCard } from '../SecondaryMuscleCard/SecondaryMuscleCard.tsx';
import {
    getSecondaryMuscleList,
} from '@/entities/Muscle/model/selectors/getSecondaryMuscleList/getSecondaryMuscleList.ts';

export const SecondaryMuscleCardList = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    // if (!muscleList) {
    //     dispatch(fetchMuscleList());
    // }
    // }, [dispatch]);

    const muscleList = useSelector(getSecondaryMuscleList);

    return muscleList?.map((muscle) => (
        <SecondaryMuscleCard
            key={muscle.id}
            id={muscle.id}
            name={muscle.name}
            value={muscle.checkBoxValue}
        />
    ));
};
