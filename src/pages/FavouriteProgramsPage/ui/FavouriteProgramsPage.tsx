import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import cls from './FavouriteProgramsPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { ProgramsList } from '@/widgets/ProgramsList';
import { favouriteProgramsReducer, getFavouritePrograms, getProgramIsLoading } from '@/entities/Program';
import {
    fetchFavouritePrograms,
} from '@/entities/Program/model/services/fetchFavouritePrograms/fetchFavouritePrograms.ts';
import { useTabTitle } from '@/shared/lib/useTabTitle/useTabTitle.ts';
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';

interface FavouriteProgramsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    favouritePrograms: favouriteProgramsReducer
}

const FavouriteProgramsPage = ({ className } : FavouriteProgramsPageProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const favouritePrograms = useSelector(getFavouritePrograms);
    const isLoading = useSelector(getProgramIsLoading);

    useEffect(() => {
        dispatch(fetchFavouritePrograms());
    }, [dispatch]);

    useTabTitle('Избранные программы');

    return (
        <DynamicModuleLoader reducers={reducers}>
             <div className={classNames(cls.FavouriteProgramsPage, {}, [className])}>
                <div className="page-header">
                    {/* <h1 className="page-title">{t('Избранные программы')}</h1> */}
                    <p className="page-subtitle">
                        {t('Программы, добавленные в избранное вами')}
                    </p>
                </div>
                <ProgramsList
                    subText={t('У вас нет избранных программ')}
                    isLoading={isLoading}
                    isMyProgramPage={false}
                    programList={favouritePrograms}
                />
            </div>
        </DynamicModuleLoader>
       
    );
};

export default FavouriteProgramsPage;
