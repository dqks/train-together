import { AddButtonSide } from '../../../../features/AddButtonSide';
import { classNames } from '../../../../shared/lib/classNames/classNames.ts';
import { SidePanelAddContent } from '../SidePanelAddContent/SidePanelAddContent.tsx';
import cls from './AddExerciseButton.module.scss';

interface AddExerciseButtonProps {
    className?: string;
}

export const AddExerciseButton = ({ className } : AddExerciseButtonProps) => (
    <div className={classNames(cls.AddExerciseButton, {}, [className])}>
        <AddButtonSide
            contentClassName={cls.sidePanelContent}
            sidePageChildren={<SidePanelAddContent className={cls.sidePanelWrapper} />}
        />
    </div>
);
