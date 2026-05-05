import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchEquipmentList } from '../../model/services/fetchEquipmentList/fetchEquipmentList.ts';
import { getEquipmentList } from '../../model/selectors/getEquipmentList/getEquipmentList.ts';
import { EquipmentCard } from '../EquipmentCard/EquipmentCard.tsx';

export const EquipmentCardList = () => {
    const dispatch = useDispatch();
    const equipmentList = useSelector(getEquipmentList);
    useEffect(() => {
        if (!equipmentList) {
            dispatch(fetchEquipmentList());
        }
    }, [dispatch]);

    return equipmentList?.map((eq) => (
        <EquipmentCard
            key={eq.id}
            name={eq.name}
        />
    ));
};
