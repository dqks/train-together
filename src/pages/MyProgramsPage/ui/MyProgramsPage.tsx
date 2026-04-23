import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import cls from './MyProgramsPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { getProgramIsLoading, ProgramsList } from '@/widgets/ProgramsList';
import { usePageTitle } from '@/shared/lib/usePageTItle/usePageTitle.ts';
import { MyProgramsControl } from '@/widgets/MyProgramsControl';
import type { ProgramCard as Program } from '@/entities/Program/model/types/programSchema.ts';
import { fetchUserPrograms } from '@/entities/Program';
import { getUserPrograms } from '@/entities/Program/model/selectors/getUserPrograms/getUserPrograms.ts';

interface YourTrainingProgramsPageProps {
    className?: string;
}

const MyProgramsPage = ({ className } : YourTrainingProgramsPageProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const programList : Program[] | null = useSelector(getUserPrograms);
    const isLoading = useSelector(getProgramIsLoading);

    useEffect(() => {
        dispatch(fetchUserPrograms());
    }, [dispatch]);

    usePageTitle('Ваши программы', t);

    return (
        <div className={classNames(cls.MyProgramsPage, {}, [className])}>
            <MyProgramsControl />
            <ProgramsList
                programList={programList}
                isMyProgramPage
                isLoading={isLoading}
            />
        </div>
    );
};

export default MyProgramsPage;
