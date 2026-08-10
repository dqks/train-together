import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ProgramCard } from '@/entities/Program';
import cls from './ProgramsContent.module.scss';
import { getUserPrograms } from '../../model/selectors/getUserPrograms/getUserPrograms';
import { fetchUserPrograms } from '../../model/services/fetchUserPrograms/fetchUserPrograms';
import { getIsLoading } from '../../model/selectors/getIsLoading/getIsLoading';
import { Loader } from '@/shared/ui/Loader/Loader';

interface ProgramsContentProps {
    userId: number | undefined
}

export const ProgramsContent = ({ userId }: ProgramsContentProps) => {
    const userPrograms = useSelector(getUserPrograms);
    const isLoading = useSelector(getIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userId) {
            dispatch(fetchUserPrograms(userId));
        }
    }, [dispatch]);

    if (isLoading) {
        return <Loader />
    }

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
