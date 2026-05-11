import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchEquipmentList } from '../../model/services/fetchEquipmentList/fetchEquipmentList.ts';
import { getEquipmentList } from '../../model/selectors/getEquipmentList/getEquipmentList.ts';
import { EquipmentCard } from '../EquipmentCard/EquipmentCard.tsx';

interface EquipmentCardListProps {
    onChange: (value: string) => void
}

export const EquipmentCardList = (props: EquipmentCardListProps) => {
    const { onChange } = props;

    const dispatch = useDispatch();
    const equipmentList = useSelector(getEquipmentList);
    useEffect(() => {
        if (!equipmentList) {
            dispatch(fetchEquipmentList());
        }
    }, [dispatch]);

    return equipmentList?.map((eq) => (
        <EquipmentCard
            id={eq.id}
            onChange={onChange}
            key={eq.id}
            name={eq.name}
        />
    ));
};
