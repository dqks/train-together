import type { ReactNode } from 'react';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Button } from '../../../shared/ui/Button/Button';
import { SidePanel } from '../../../shared/ui/SidePanel/SidePanel';
import cls from './FilterButton.module.scss';
import Filter from '../../../shared/assets/icons/Filter.svg?react';

interface FilterButtonProps {
    className?: string;
    sidePageChildren: ReactNode;
    isOpen: boolean;
    onOutsideClick: () => void;
    contentClassName?: string;
}

export const FilterButton = ({
    className,
    isOpen,
    sidePageChildren,
    onOutsideClick,
    contentClassName,
} : FilterButtonProps) => (
    <div className={classNames(cls.FilterButton, {}, [className])}>
        <Button type="button" onClick={onOutsideClick}>
            <Filter stroke="purple" width={15} height={15} />
        </Button>
        <SidePanel
            onOutsideClick={onOutsideClick}
            isOpen={isOpen}
            contentClassName={contentClassName}
        >
            {
                sidePageChildren
            }
        </SidePanel>
    </div>
);
