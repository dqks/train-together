import { ProgramCard } from '@/entities/Program';
import cls from './RatingsContent.module.scss';

export const RatingsContent = () => (
    <div className="grid grid-3">
        <ProgramCard
            id={1}
            className={cls.programCard}
            programName="Силовая программа"
            description="Программа для чистого силового развития"
            imageUrl="test"
            userName="Olsh"
            followersCount={2}
            daysAmount={3}
            difficulty="Средний"
            goal="Сила"
        />
    </div>
);
