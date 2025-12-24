import { useDispatch, useSelector } from 'react-redux';
import { type ReactNode, useEffect } from 'react';
import cls from './ProgramsList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { ProgramCard } from '@/entities/Program';
import { fetchProgramList, getProgramIsLoading, getProgramList } from '@/widgets/ProgramsList';
import type { Program } from '@/widgets/ProgramsList/model/types/programSchema.ts';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';
import {
    fetchUserProgramList,
} from '@/widgets/ProgramsList/model/services/fetchUserProgramList/fetchUserProgramList.ts';

interface ProgramsListProps {
    className?: string;
    isMyProgramPage: boolean;
}

export const ProgramsList = (props: ProgramsListProps) => {
    const {
        className,
        isMyProgramPage,
    } = props;
    const dispatch = useDispatch();
    const programList : Program[] | null = useSelector(getProgramList);
    const isLoading = useSelector(getProgramIsLoading);

    useEffect(() => {
        if (isMyProgramPage) {
            // 8 = userId
            dispatch(fetchUserProgramList(8));
        } else {
            dispatch(fetchProgramList());
        }
    }, [dispatch]);

    let programCards: ReactNode[] | undefined;

    if (isMyProgramPage) {
        programCards = programList?.map((program) => (
            <ProgramCard
                programName={program.name}
                className={cls.program}
                description={program.description}
                key={program.id}
                id={program.id}
                deleteCreator
            />
        ));
    } else {
        programCards = programList?.map((program) => (
            <ProgramCard
                programName={program.name}
                className={cls.program}
                description={program.description}
                key={program.id}
                id={program.id}
                userName={program.nickname}
            />
        ));
    }

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
