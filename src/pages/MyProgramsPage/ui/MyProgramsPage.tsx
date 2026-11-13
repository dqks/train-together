import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import cls from './MyProgramsPage.module.scss';
import { ProgramsList } from '@/widgets/ProgramsList';
import type { ProgramCard as Program } from '@/entities/Program/model/types/programSchema.ts';
import { fetchUserPrograms, getUserPrograms, getUserProgramsIsLoading, userProgramsReducer } from '@/entities/Program';
import { SearchInput } from '@/shared/ui/SearchInput/SearchInput.tsx';
import { AddMyProgram } from '@/features/AddMyProgram';
import { useTabTitle } from '@/shared/lib/useTabTitle/useTabTitle.ts';
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducerList = {
    userPrograms: userProgramsReducer
}

const MyProgramsPage = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const programList : Program[] | null = useSelector(getUserPrograms);
    const isLoading = useSelector(getUserProgramsIsLoading);

    useEffect(() => {
        dispatch(fetchUserPrograms());
    }, [dispatch]);

    useTabTitle('Ваши программы');

    return (
        <DynamicModuleLoader reducers={reducers}>
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
                    subText={t('У вас нет программ')}
                    isLoading={isLoading}
                    programList={programList}
                    isMyProgramPage
                />
            </div>
        </DynamicModuleLoader>

    );
};

export default MyProgramsPage;
