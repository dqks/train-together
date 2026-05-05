import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import cls from './MyProgramsPage.module.scss';
import { ProgramsList } from '@/widgets/ProgramsList';
import type { ProgramCard as Program } from '@/entities/Program/model/types/programSchema.ts';
import { fetchUserPrograms, getProgramIsLoading } from '@/entities/Program';
import { getUserPrograms } from '@/entities/Program/model/selectors/getUserPrograms/getUserPrograms.ts';
import { SearchInput } from '@/shared/ui/SearchInput/SearchInput.tsx';
import { AddMyProgram } from '@/features/AddMyProgram';

const MyProgramsPage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const programList : Program[] | null = useSelector(getUserPrograms);
    const isLoading = useSelector(getProgramIsLoading);

    useEffect(() => {
        dispatch(fetchUserPrograms());
    }, [dispatch]);

    return (
        <div>
            <div className={cls.pageHeaderContent}>
                <div>
                    <h1 className="page-title">{t('Ваши программы')}</h1>
                    <p className="page-subtitle">
                        {t('Создавайте и управляйте своими программами тренировок')}
                    </p>
                </div>
                <AddMyProgram />
            </div>
            <SearchInput placeholder={t('Поиск по названию...')} />
            <ProgramsList
                isLoading={isLoading}
                programList={programList}
                isMyProgramPage
            />
        </div>
    );
};

export default MyProgramsPage;
