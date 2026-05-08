import { ProgramCard } from '@/entities/Program';
import cls from './ProgramsContent.module.scss';

export const ProgramsContent = () => (
    <div className="grid grid-3">
        <ProgramCard
            deleteCreator
            className={cls.programCard}
            id={1}
            programName="Силовая"
            description="Описание программы"
            imageUrl="test"
        />
        <ProgramCard
            id={1}
            className={cls.programCard}
            deleteCreator
            programName="Силовая"
            description="Описание программы"
            imageUrl="test"
        />
        <ProgramCard
            deleteCreator
            id={1}
            className={cls.programCard}
            programName="Силовая"
            description="Описание программы"
            imageUrl="test"
        />
        <ProgramCard
            deleteCreator
            className={cls.programCard}
            id={1}
            programName="Силовая"
            description="Описание программы"
            imageUrl="test"
        />
    </div>
);
