import { useTranslation } from 'react-i18next';
import { useLocation, useOutletContext, useParams } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './ProgramDetailsPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { usePageTitle } from '@/shared/lib/usePageTItle/usePageTitle.ts';
import {
    fetchProgramDetails,
    getProgramDetails,
    getProgramIsLoading,
    ProgramCard,
    ProgramDay,
    programsActions,
} from '@/entities/Program';
import { SubscribeProgram } from '@/features/SubscribeProgram';
import { Days } from '@/entities/Program/ui/ProgramDay/ProgramDay.tsx';
import type { AppContextType } from '@/app/layout/AppLayout/ui/AppLayout.tsx';
import { getUserId } from '@/entities/User';
import { DeleteProgramButton } from '@/features/DeleteProgram';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { getProgramErrors } from '@/entities/Program/model/selectors/getProgramErrors/getProgramErrors.ts';
import { NotFound } from '@/shared/ui/NotFound/NotFound.tsx';

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
    const location = useLocation();

    usePageTitle('Программа', t);
    const context : AppContextType = useOutletContext();

    useEffect(() => {
        if (location.state?.from) {
            context.setBackButton(location.state.from);
        } else {
            context.setBackButton(AuthRoutePath.programs);
        }
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

    if (errors) {
        return (
            <NotFound message="Программа не найдена" />
        );
    }

    return (
        <div className={classNames(cls.ProgramDetailsPage, {}, [className])}>
            {
                isOwner
                && (
                    <DeleteProgramButton
                        redirectTo={location.state.from || AuthRoutePath.my_programs}
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
