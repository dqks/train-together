import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
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
import { EditMode } from './EditMode/EditMode.tsx';

interface ProgramDetailsPageProps {
    className?: string;
}

const ProgramDetailsPage = ({ className }: ProgramDetailsPageProps) => {
    const { t, i18n } = useTranslation();

    const userId = useSelector(getUserId);
    const programDetails = useSelector(getProgramDetails);
    const isLoading = useSelector(getProgramIsLoading);
    const errors = useSelector(getProgramErrors);
    const isOwner = userId === programDetails?.user.id;

    const [isEditMode, setIsEditMode] = useState<boolean>(false);

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

    return (
        <>
            {isEditMode
                ? (
                    <EditMode
                        selectedProgramDifficultyId={programDetails?.difficulty.id}
                        selectedProgramGoalId={programDetails?.goal.id}
                        programIsPublic={programDetails?.isPublic}
                        programName={programDetails?.name}
                        setIsEditMode={setIsEditMode}
                        programImageUrl={programDetails?.imageUrl}
                        programDescription={programDetails?.description}
                        programId={programDetails?.id}
                    />
                )
                : (
                    <div className={classNames(cls.ProgramDetailsPage, {}, [className])}>
                        <Hero
                            authorImage={programDetails?.user.avatarUrl}
                            programName={programDetails?.name}
                            authorName={programDetails?.user.nickname}
                            imageUrl={programDetails?.imageUrl}
                            formattedDate={formattedDate}
                            isOwner={isOwner}
                            setIsEditMode={setIsEditMode}
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
                    </div>
                )}
        </>
    );
};

export default ProgramDetailsPage;
