import { ProgramCard } from '@/entities/Program';
import cls from './RatingsContent.module.scss';

export const RatingsContent = () => (
    <div className="grid grid-3">
        <ProgramCard
            id={1}
            className={cls.programCard}
            programName="Силовая"
            description="Описание программы"
            imageUrl="test"
        />
        <ProgramCard
            className={cls.programCard}
            id={1}
            programName="Силовая"
            description="Описание программы"
            imageUrl="test"
        />
        <ProgramCard
            className={cls.programCard}
            id={1}
            programName="Силовая"
            description="Описание программы"
            imageUrl="test"
        />
        <ProgramCard
            className={cls.programCard}
            id={1}
            programName="Силовая"
            description="Описание программы"
            imageUrl="test"
        />
    </div>
);
