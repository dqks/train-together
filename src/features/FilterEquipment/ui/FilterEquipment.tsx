import cls from "./FilterEquipment.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Button } from "../../../shared/ui/Button/Button.tsx";

interface FilterEquipmentProps {
    className?: string;
}

export const FilterEquipment = ({className} : FilterEquipmentProps) => {
    return (
        <div className={classNames(cls.FilterEquipment, {}, [className])}>
            <Button>Оборудование</Button>
        </div>
    )
}