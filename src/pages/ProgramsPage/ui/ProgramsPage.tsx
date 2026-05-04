import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './ProgramsPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import {
    fetchPublicPrograms, getProgramIsLoading, getPublicPrograms, ProgramsList,
} from '@/widgets/ProgramsList';
import { usePageTitle } from '@/shared/lib/usePageTItle/usePageTitle.ts';
import type { ProgramCard as Program } from '@/entities/Program/model/types/programSchema.ts';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';

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

    if (isLoading) {
        return <PageLoader />;
    }

    return (
        <div className={classNames(cls.ProgramsPage, {}, [className])}>
            {
                isLoading
                    ? <PageLoader />
                    : (
                        <ProgramsList
                            programList={programList}
                            isMyProgramPage={false}
                        />
                    )
            }
        </div>
    );
};

export default ProgramsPage;
