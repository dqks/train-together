import { ProgramCard } from '@/entities/Program';

export const ProgramsContent = () => (
    <div className="grid grid-3">
        <ProgramCard
            deleteCreator
            id={1}
            programName="Силовая"
            description="Описание программы"
            imageUrl="test"
        />
        <ProgramCard
            id={1}
            deleteCreator
            programName="Силовая"
            description="Описание программы"
            imageUrl="test"
        />
        <ProgramCard
            deleteCreator
            id={1}
            programName="Силовая"
            description="Описание программы"
            imageUrl="test"
        />
        <ProgramCard
            deleteCreator
            id={1}
            programName="Силовая"
            description="Описание программы"
            imageUrl="test"
        />
    </div>
);
