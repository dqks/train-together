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
import { ProgramsControl } from '@/widgets/ProgramsControl/ui/ProgramsControl/ProgramsControl.tsx';

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
            <div className="page-header">
                <h1 className="page-title">{t('Программы пользователей')}</h1>
                <p className="page-subtitle">
                    {t('Изучайте и сохраняйте программы тренировок от сообщества')}
                </p>
            </div>
            <ProgramsControl />
            <ProgramsList
                isLoading={isLoading}
                programList={programList}
                isMyProgramPage={false}
            />
        </div>
    );
};

export default ProgramsPage;
