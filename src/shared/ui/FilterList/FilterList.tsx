import { classNames } from "../../lib/classNames/classNames";
import ChevronRight from "../../../shared/assets/icons/chevron-right.svg?react"
import cls from "./FilterList.module.scss"
import { useState } from "react";
import { Input } from "../Input/Input";

type ListItem = {
    id: number;
    name: string;
}

interface FilterListProps {
    className?: string;
    title: string;
    items: ListItem[];
}

export const FilterList = ({
    className,
    title,
    items
} : FilterListProps) => {
    const [showItems, setShowItems] = useState(false);

    const showHander = () => {
        setShowItems(prev => !prev)
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
                showItems && 
                <div>
                    {items.map(el => {
                        return (
                            <div key={el.id} className={cls.inputWrapper}>
                                <Input
                                    name={el.id.toString()}
                                    id={el.id.toString()}
                                    type="checkbox"
                                />
                                <label htmlFor={el.id.toString()}>{el.name}</label>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}