// import { classNames } from "../../shared/lib/classNames/classNames.ts";
import { FilterList } from "../../shared/ui/FilterList/FilterList.tsx";
// import cls from "./MuscleFilterList.module.scss"

// interface MuscleFilterListProps {
//     className?: string;
// }

export const MuscleFilterList = () => {

    //Логика на получение массива для фильтров мышц
    return (
        <FilterList title={"Грудь"} items={[{
            id: 1,
            name: "Верхняя часть груди"
        }, {
            id: 2,
            name: "Средняя часть груди"
        }, {
            id: 3,
            name: "Нижняя часть груди"
        }]} 
        />                   
    )
}