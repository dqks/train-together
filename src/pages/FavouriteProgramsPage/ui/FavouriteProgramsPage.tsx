import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import cls from './FavouriteProgramsPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { ProgramsList } from '@/widgets/ProgramsList';
import { getProgramIsLoading, getFavouritePrograms } from '@/entities/Program';
import {
    fetchFavouritePrograms,
} from '@/entities/Program/model/services/fetchFavouritePrograms/fetchFavouritePrograms.ts';

interface FavouriteProgramsPageProps {
    className?: string;
}

const FavouriteProgramsPage = ({ className } : FavouriteProgramsPageProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const favouritePrograms = useSelector(getFavouritePrograms);
    const isLoading = useSelector(getProgramIsLoading);

    useEffect(() => {
        dispatch(fetchFavouritePrograms());
    }, [dispatch]);

    return (
        <div className={classNames(cls.FavouriteProgramsPage, {}, [className])}>
            <div className="page-header">
                <h1 className="page-title">{t('Избранные программы')}</h1>
                <p className="page-subtitle">
                    {t('Программы, добавленные в избранное вами')}
                </p>
            </div>
            <ProgramsList
                isLoading={isLoading}
                isMyProgramPage={false}
                programList={favouritePrograms}
            />
        </div>
    );
};

export default FavouriteProgramsPage;
