import { classNames } from "../../../../shared/lib/classNames/classNames";
import ChevronRight from "../../../../shared/assets/icons/chevron-right.svg?react"
import cls from "./FilterList.module.scss"
import { useState } from "react";
import { Input } from "../../../../shared/ui/Input/Input";

type ListItem = {
    id: number;
    name: string;
}

interface FilterListProps {
    className?: string;
    title: string;
    muscles: ListItem[];
}

export const FilterList = ({
    className,
    title,
    muscles
} : FilterListProps) => {
    const [showMuscles, setShowMuscles] = useState(false);

    const showHander = () => {
        setShowMuscles(prev => !prev)
    }

    return (
        <div className={classNames(cls.MuscleList, {}, [className])}>
            <div onClick={showHander} className={cls.titleWrapper}>
                <ChevronRight 
                    width={20} 
                    height={15}
                />
                <p>{title}</p>
            </div>
            {
                showMuscles && 
                <div>
                    {muscles.map(el => {
                        return (
                            <div key={el.id} className={cls.inputWrapper}>
                                <Input name={el.id.toString()} id={el.id.toString()} type="checkbox"/>
                                <label htmlFor={el.id.toString()}>{el.name}</label>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}