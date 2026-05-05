import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './ProgramDetailsPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import {
    fetchProgramDetails, getProgramDetails, getProgramIsLoading, programsActions,
} from '@/entities/Program';
import { getUserId } from '@/entities/User';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { getProgramErrors } from '@/entities/Program/model/selectors/getProgramErrors/getProgramErrors.ts';
import { CenterText } from '@/shared/ui/CenterText/CenterText.tsx';
import { StatsBar } from './StatsBar/StatsBar.tsx';
import { Hero } from './Hero/Hero.tsx';
import { Sidebar } from './Sidebar/Sidebar.tsx';
import { Description } from './Description/Description.tsx';
import { Days } from './Days/Days.tsx';

interface ProgramDetailsPageProps {
    className?: string;
}

const ProgramDetailsPage = ({ className } : ProgramDetailsPageProps) => {
    const { t } = useTranslation();

    const userId = useSelector(getUserId);
    const programDetails = useSelector(getProgramDetails);
    const isLoading = useSelector(getProgramIsLoading);
    const errors = useSelector(getProgramErrors);
    const isOwner = userId === programDetails?.user.id;

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProgramDetails(Number(params.id)));
        return () => {
            dispatch(programsActions.setProgramDetails(null));
        };
    }, [dispatch]);

    if (isLoading) {
        return <PageLoader />;
    }

    if (errors) {
        return (
            <CenterText text="Программа не найдена" />
        );
    }

    return (
        <div className={classNames(cls.ProgramDetailsPage, {}, [className])}>
            <Hero />
            <div className={cls.programContainer}>
                <StatsBar />
                <div className={cls.programContentGrid}>
                    <div className={cls.programMain}>
                        <Description />
                        <section className={cls.programSection}>
                            <h2 className={cls.sectionTitle}>
                                Программа тренировок
                            </h2>
                            <Days />
                        </section>
                    </div>
                    <Sidebar isSubscribed={programDetails?.isFollowed} params={params} />
                </div>
            </div>
        </div>
    );
};

export default ProgramDetailsPage;
