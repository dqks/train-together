import { useSelector } from 'react-redux';
import { getSecondaryMuscleList } from '../../model/selectors/getSecondaryMuscleList/getSecondaryMuscleList.ts';
import { MuscleCard } from '../MuscleCard/MuscleCard.tsx';

interface SecondaryMuscleCardListProps {
    onChange: (id: string) => void
    values?: string[]
}

export const SecondaryMuscleCardList = (props: SecondaryMuscleCardListProps) => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    // if (!muscleList) {
    //     dispatch(fetchMuscleList());
    // }
    // }, [dispatch]);

    const { onChange, values } = props;

    const muscleList = useSelector(getSecondaryMuscleList);

    return muscleList?.map((muscle) => (
        // <SecondaryMuscleCard
        //     values={values}
        //     key={muscle.id}
        //     onChange={onChange}
        //     id={muscle.id}
        //     name={muscle.name}
        //     value={muscle.checkBoxValue}
        // />
        <MuscleCard
            type="checkbox"
            inputName="secondaryMuscleInline"
            values={values}
            key={muscle.id}
            onChange={onChange}
            id={muscle.id}
            muscleName={muscle.name}
            value={muscle.checkBoxValue}
        />
    ));
};
