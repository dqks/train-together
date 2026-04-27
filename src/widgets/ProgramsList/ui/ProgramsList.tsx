import { type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ProgramsList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { ProgramCard } from '@/entities/Program';
import type { ProgramCard as Program } from '@/entities/Program/model/types/programSchema.ts';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';
import { CenterText } from '@/shared/ui/CenterText/CenterText.tsx';

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
    const { t } = useTranslation();
    let programCards: ReactNode[] | undefined;

    if (isMyProgramPage) {
        if (programList && programList?.length <= 0) {
            return (<CenterText text={t('Упсс...')} subText={t('У вас нет программ')} />);
        }

        programCards = programList?.map((program) => (
            <ProgramCard
                programName={program.name}
                className={cls.program}
                description={program.description}
                key={program.id}
                id={program.id}
                imageUrl={program.imageUrl}
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
                imageUrl={program.imageUrl}
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
