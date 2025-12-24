import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import cls from './ProgramsList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { ProgramCard } from '@/entities/Program';
import { fetchProgramList, getProgramIsLoading, getProgramList } from '@/widgets/ProgramsList';
import type { Program } from '@/widgets/ProgramsList/model/types/programSchema.ts';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';

interface ProgramsListProps {
    className?: string;
}

export const ProgramsList = ({ className }: ProgramsListProps) => {
    const dispatch = useDispatch();
    const programList = useSelector(getProgramList);
    const isLoading = useSelector(getProgramIsLoading);

    useEffect(() => {
        dispatch(fetchProgramList());
    }, [dispatch]);

    const programCards = programList
        ?.map((program: Program) => (
            <ProgramCard
                programName={program.name}
                className={cls.program}
                description={program.description}
                userName={program.nickname}
                key={program.id}
                id={program.id}
            />
        ));

    return (
        <div className={classNames(cls.ProgramsList, {}, [className])}>
            {
                isLoading
                    ? <Loader />
                    : <>{programCards}</>
            }
        </div>
    );
};
