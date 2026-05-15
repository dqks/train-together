import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ProgramCard } from '@/entities/Program';
import cls from './ProgramsContent.module.scss';
import { getUserPrograms } from '@/pages/ProfilePage/model/selectors/getUserPrograms/getUserPrograms.ts';
import { fetchUserPrograms } from '@/pages/ProfilePage/model/services/fetchUserPrograms/fetchUserPrograms.ts';

interface ProgramsContentProps {
        userId: number | undefined
}

export const ProgramsContent = ({ userId }: ProgramsContentProps) => {
    const userPrograms = useSelector(getUserPrograms);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userId) {
            dispatch(fetchUserPrograms(userId));
        }
    }, [dispatch]);

    const programCards = userPrograms?.map((program) => (
        <ProgramCard
            followersCount={program.followersCount}
            userName={program.user.nickname}
            deleteCreator
            className={cls.programCard}
            id={program.id}
            key={program.id}
            programName={program.name}
            description={program.description}
            imageUrl={program.imageUrl}
            goal={program.goal.name}
            goalEng={program.goal.nameEng}
            difficulty={program.difficulty.name}
            difficultyEng={program.difficulty.nameEng}
            daysAmount={program.daysAmount}
        />
    ));

    return (
        <div className="grid grid-3">
            {programCards}
        </div>
    );
};
