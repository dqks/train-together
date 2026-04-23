import { useTranslation } from 'react-i18next';
import { useOutletContext, useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './ProgramDetailsPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { usePageTitle } from '@/shared/lib/usePageTItle/usePageTitle.ts';
import {
    fetchProgramDetails, getProgramDetails, getProgramIsLoading, ProgramCard, ProgramDay, programsActions,
} from '@/entities/Program';
import { SubscribeProgram } from '@/features/SubscribeProgram';
import { Days } from '@/entities/Program/ui/ProgramDay/ProgramDay.tsx';
import type { AppContextType } from '@/app/layout/AppLayout/ui/AppLayout.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { getUserId } from '@/entities/User';
import { DeleteProgramButton } from '@/features/DeleteProgram';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';

interface ProgramDetailsPageProps {
    className?: string;
}

const ProgramDetailsPage = ({ className } : ProgramDetailsPageProps) => {
    const { t } = useTranslation();

    const userId = useSelector(getUserId);
    const programDetails = useSelector(getProgramDetails);
    const isLoading = useSelector(getProgramIsLoading);

    const params = useParams();
    const dispatch = useDispatch();

    usePageTitle('Программа', t);
    const context : AppContextType = useOutletContext();

    useEffect(() => {
        context.setBackButton(AuthRoutePath.programs); // TODO исправить что с программа -> программы, моя программа -> мои программы
        // TODO передавать через state в to
        return () => {
            context.setBackButton('');
        };
    }, [context]);

    useEffect(() => {
        dispatch(fetchProgramDetails(Number(params.id)));
        return () => {
            dispatch(programsActions.setProgramDetails(null));
        };
    }, [dispatch]);

    if (isLoading) {
        return <PageLoader />;
    }

    return (
        <div className={classNames(cls.ProgramDetailsPage, {}, [className])}>
            {
                (userId === programDetails?.user.id)
                && (
                    <DeleteProgramButton
                        programId={Number(params.id)}
                    />
                )
            }
            <ProgramCard
                userName={programDetails?.user.nickname}
                id={programDetails?.id}
                programName={programDetails?.name}
                description={programDetails?.description}
                className={cls.programCard}
            />
            <SubscribeProgram isSubscribed={programDetails?.isFollowed} programId={programDetails?.id} />
            <ProgramDay day={Days.MONDAY} className={cls.programDay} />
            <ProgramDay day={Days.WEDNESDAY} className={cls.programDay} />
            <ProgramDay day={Days.FRIDAY} className={cls.programDay} />
        </div>
    );
};

export default ProgramDetailsPage;
