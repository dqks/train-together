// import { classNames } from "../../shared/lib/classNames/classNames.ts";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FilterList } from '@/shared/ui/FilterList/FilterList.tsx';
import { fetchMuscleList } from '@/entities/Muscle/model/services/fetchMuscleList/fetchMuscleList.ts';
import { getMuscleList } from '@/entities/Muscle/model/selectors/getMuscleList/getMuscleList.ts';
// import cls from "./MuscleFilterList.module.scss"

// interface MuscleFilterListProps {
//     className?: string;
// }

export const MuscleFilterList = () => {
    const dispatch = useDispatch();
    const muscleList = useSelector(getMuscleList);
    useEffect(() => {
        dispatch(fetchMuscleList());
    }, [dispatch]);

    return (
        <FilterList
            title="Мыщцы"
            items={muscleList || []}
        />
    );
};
