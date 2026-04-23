import { type ReactNode } from 'react';
import cls from './ProgramsList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { ProgramCard } from '@/entities/Program';
import type { ProgramCard as Program } from '@/entities/Program/model/types/programSchema.ts';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';

interface ProgramsListProps {
    className?: string;
    isMyProgramPage: boolean;
    isLoading: boolean;
    programList: Program[] | null;
}

export const ProgramsList = (props: ProgramsListProps) => {
    const {
        className,
        isMyProgramPage,
        isLoading,
        programList,
    } = props;

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
                userName={program.user.nickname}
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
