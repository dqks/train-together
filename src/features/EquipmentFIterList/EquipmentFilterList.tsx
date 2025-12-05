// import { classNames } from "../../shared/lib/classNames/classNames.ts";
import { FilterList } from '../../shared/ui/FilterList/FilterList.tsx';
// import cls from "./EquipmentFilterList.module.scss"

// interface EquipmentFilterListProps {
//     className?: string;
// }

export const EquipmentFilterList = () =>

    // Логика на получение массива для фильтров оборудования
    (
        <FilterList
            title="Свободные веса"
            items={[{
                id: 1,
                name: 'Штанга',
            }, {
                id: 2,
                name: 'Гантели',
            }, {
                id: 3,
                name: 'Гиря',
            }]}
        />
    );
