import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './ProgramsPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import {
    fetchPublicPrograms, getProgramIsLoading, getPublicPrograms, ProgramsList,
} from '@/widgets/ProgramsList';
import { usePageTitle } from '@/shared/lib/usePageTItle/usePageTitle.ts';
import { FilterPrograms } from '@/features/FilterPrograms';
import type { ProgramCard as Program } from '@/entities/Program/model/types/programSchema.ts';

interface ProgramsPageProps {
    className?: string;
}

const ProgramsPage = ({ className } : ProgramsPageProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const programList : Program[] | null = useSelector(getPublicPrograms);
    const isLoading = useSelector(getProgramIsLoading);

    usePageTitle('Программы пользователей', t);

    useEffect(() => {
        dispatch(fetchPublicPrograms());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProgramsPage, {}, [className])}>
            <ProgramsList
                programList={programList}
                isLoading={isLoading}
                isMyProgramPage={false}
            />
            <FilterPrograms />
        </div>
    );
};

export default ProgramsPage;
