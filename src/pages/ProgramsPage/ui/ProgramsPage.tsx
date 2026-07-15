import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './ProgramsPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import {
    fetchPublicPrograms, getProgramIsLoading, getPublicPrograms, ProgramsList,
} from '@/widgets/ProgramsList';
import type { ProgramCard as Program } from '@/entities/Program/model/types/programSchema.ts';
import { ProgramsControl } from '@/widgets/ProgramsControl/ui/ProgramsControl/ProgramsControl.tsx';
import { useTabTitle } from '@/shared/lib/useTabTitle/useTabTitle.ts';

interface ProgramsPageProps {
    className?: string;
}

const ProgramsPage = ({ className } : ProgramsPageProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const programList : Program[] | null = useSelector(getPublicPrograms);
    const isLoading = useSelector(getProgramIsLoading);

    useEffect(() => {
        dispatch(fetchPublicPrograms());
    }, [dispatch]);

    useTabTitle('Программы пользователей');

    return (
        <div className={classNames(cls.ProgramsPage, {}, [className])}>
            <div className="page-header">
                <h1 className="page-title">{t('Программы пользователей')}</h1>
                <p className="page-subtitle">
                    {t('Изучайте и сохраняйте программы тренировок от сообщества')}
                </p>
            </div>
            <ProgramsControl programCount={programList?.length} />
            <ProgramsList
                subText={t('Программы не найдены')}
                isLoading={isLoading}
                programList={programList}
                isMyProgramPage={false}
            />
        </div>
    );
};

export default ProgramsPage;
