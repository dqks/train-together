import { useTranslation } from 'react-i18next';
import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import cls from './EditProgramPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { BackLink } from '@/shared/ui/BackLink/BackLink.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { EditMyProgram } from '@/features/EditMyProgram';
import { fetchProgramDetails, getProgramDetails, programsActions } from '@/entities/Program';
import { useDispatch, useSelector } from 'react-redux';

// interface EditProgramPageProps {
//     className?: string;
//     setIsEditMode: (value: boolean) => void
//     programImageUrl: string | undefined
//     programName: string | undefined
//     programDescription: string | undefined
//     programIsPublic: boolean | undefined
//     programId: number | undefined
//     selectedProgramGoalId: number | undefined
//     selectedProgramDifficultyId: number | undefined
//     programDays: Day[] | undefined
// }

export const EditProgramPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { state } = useLocation()

    const programDetails = useSelector(getProgramDetails)
    const dispatch = useDispatch()
    const params = useParams();

    console.log(params)

    useEffect(() => {
        if (!state) dispatch(fetchProgramDetails(Number(params.id)))
        return () => {
            dispatch(programsActions.setProgramDetails(null));
        };
    }, [])

    const onCancel = useCallback(() => {
        navigate(AuthRoutePath.program_details + programDetails?.id);
    }, []);

    return (
        <div className={classNames(cls.EditMode, {}, [])}>

            <div className={cls.editHeader}>
                <div className={cls.editHeaderLeft}>
                    <BackLink className={cls.backLink} text="Назад" to={AuthRoutePath.programs} />
                    <h1 className={cls.pageTitle}>{t('Редактирование программы')}</h1>
                </div>
            </div>

            <EditMyProgram
                programDays={programDetails?.days || state?.days}
                selectedProgramGoalId={programDetails?.goal.id || state?.goal.id}
                selectedProgramDifficultyId={programDetails?.difficulty.id || state?.difficulty.id}
                programId={programDetails?.id || state?.id}
                onCancel={onCancel}
                programIsPublic={programDetails?.isPublic || state?.isPublic}
                programName={programDetails?.name || state?.name}
                programDescription={programDetails?.description || state?.description}
                programImageUrl={programDetails?.imageUrl || state?.imageUrl}
            />
        </div>
    );
};
