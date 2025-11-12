import cls from "./FilterMuscle.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { Button } from "../../../shared/ui/Button/Button.tsx";

interface FilterMuscleProps {
    className?: string;
}

export const FilterMuscle = ({className} : FilterMuscleProps) => {
    return (
        <div className={classNames(cls.FilterMuscle, {}, [className])}>
            <Button>Мышцы</Button>
        </div>
    )
}