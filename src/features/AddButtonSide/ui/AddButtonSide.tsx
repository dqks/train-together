import type { ReactNode } from 'react';
import cls from './AddButtonSide.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { SidePanel } from '@/shared/ui/SidePanel/SidePanel';
import { useOpen } from '@/shared/lib/useOpen/useOpen.tsx';

interface AddButtonSideProps {
    className?: string;
    sidePageChildren: ReactNode;
    contentClassName?: string;
}

export const AddButtonSide = ({
    className,
    sidePageChildren,
    contentClassName,
}: AddButtonSideProps) => {
    const [isOpen, openHandler] = useOpen();

    return (
        <div className={classNames(cls.AddExercise, {}, [className])}>
            <Button type="button" onClick={openHandler}>
                +
            </Button>
            <SidePanel
                contentClassName={contentClassName}
                isOpen={isOpen}
                onOutsideClick={openHandler}
            >
                {
                    sidePageChildren
                }
            </SidePanel>
        </div>
    );
};
