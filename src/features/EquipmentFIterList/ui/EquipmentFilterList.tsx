import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FilterList } from '@/shared/ui/FilterList/FilterList.tsx';
import {
    fetchEquipmentList,
} from '@/features/EquipmentFIterList/model/services/fetchEquipmentList/fetchEquipmentList.ts';
import { getEquipmentList } from '../model/selectors/getEquipmentList/getEquipmentList.ts';

export const EquipmentFilterList = () => {
    const dispatch = useDispatch();
    const equipmentList = useSelector(getEquipmentList);
    useEffect(() => {
        dispatch(fetchEquipmentList());
    }, [dispatch]);

    return (
        <FilterList
            title="Свободные веса"
            items={equipmentList || []}
        />
    );
};
