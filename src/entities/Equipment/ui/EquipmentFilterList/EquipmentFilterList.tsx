import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FilterList } from '@/shared/ui/FilterList/FilterList.tsx';
import {
    fetchEquipmentList,
} from '@/entities/Equipment/model/services/fetchEquipmentList/fetchEquipmentList.ts';
import { getEquipmentList } from '@/entities/Equipment/model/selectors/getEquipmentList/getEquipmentList.ts';

export const EquipmentFilterList = () => {
    const dispatch = useDispatch();
    const equipmentList = useSelector(getEquipmentList);
    useEffect(() => {
        if (!equipmentList) {
            dispatch(fetchEquipmentList());
        }
    }, [dispatch]);

    return (
        <FilterList
            title="Оборудование"
            items={equipmentList || []}
        />
    );
};
