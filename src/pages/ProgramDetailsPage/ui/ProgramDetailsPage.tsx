import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './ProgramDetailsPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import {
    fetchProgramDetails, 
    getProgramDetails, 
    getProgramDetailsIsLoading, 
    programsDetailsActions,
    programsDetailsReducer,
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
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader.tsx';

interface ProgramDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    programDetails: programsDetailsReducer
}

const ProgramDetailsPage = ({ className }: ProgramDetailsPageProps) => {
    const { t, i18n } = useTranslation();

    const userId = useSelector(getUserId);
    const programDetails = useSelector(getProgramDetails);
    const isLoading = useSelector(getProgramDetailsIsLoading);
    const errors = useSelector(getProgramErrors);
    const isOwner = userId === programDetails?.user.id;

    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchProgramDetails(Number(params.id)));
        return () => {
            dispatch(programsDetailsActions.setProgramDetails(null));
        };
    }, [dispatch]);

    const onEditButtonClick = useCallback(() => {
        navigate(
            `${AuthRoutePath.program_details}${programDetails?.id}/edit`,
            { state: programDetails },
        );
    }, [programDetails]);

    let formattedDate;

    if (programDetails?.createdAt) {
        const date = new Date(programDetails?.createdAt);
        if (i18n.language === 'en') {
            formattedDate = date?.toLocaleDateString('en-EN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            });
        } else {
            formattedDate = date?.toLocaleDateString('ru-RU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            });
        }
    }

    const exerciseCount = programDetails?.days.reduce((
        acc,
        day,
    ) => acc + day.exercises.length, 0);

    let content = (
        <>
            <Hero
                programId={programDetails?.id}
                authorImage={programDetails?.user.avatarUrl}
                programName={programDetails?.name}
                authorName={programDetails?.user.nickname}
                imageUrl={programDetails?.imageUrl}
                formattedDate={formattedDate}
                isOwner={isOwner}
                onEditButtonClick={onEditButtonClick}
            />
            <div className={cls.programContainer}>
                <StatsBar
                    daysCount={programDetails?.days.length}
                    exerciseCount={exerciseCount}
                    difficulty={programDetails?.difficulty}
                    goal={programDetails?.goal}
                />
                <div className={cls.programContentGrid}>
                    <div className={cls.programMain}>
                        <Description programDescription={programDetails?.description} />
                        <section className={cls.programSection}>
                            <h2 className={cls.sectionTitle}>
                                {t('Программа тренировок')}
                            </h2>
                            <Days days={programDetails?.days} />
                        </section>
                    </div>
                    <Sidebar
                        authorImage={programDetails?.user.avatarUrl}
                        authorId={programDetails?.user.id}
                        followsCount={programDetails?.followsCount}
                        programsCount={programDetails?.user.programsCount}
                        authorName={programDetails?.user.nickname}
                        isSubscribed={programDetails?.isFollowed}
                        params={params}
                    />
                </div>
            </div>
        </>
    )

    if (isLoading) {
        content = <PageLoader />;
    }

    if (errors) {
        content = (
            <CenterText text={t('Программа не найдена')} />
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ProgramDetailsPage, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
        
    );
};

export default ProgramDetailsPage;
