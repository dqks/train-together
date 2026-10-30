import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import cls from './EditProgramPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { BackLink } from '@/shared/ui/BackLink/BackLink.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { EditMyProgram } from '@/features/EditMyProgram';
import { getProgramDetails, getProgramIsLoading } from '@/entities/Program';
import { useSelector } from 'react-redux';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';

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
    const programDetails = useSelector(getProgramDetails)
    const isLoading = useSelector(getProgramIsLoading)

    const onCancel = useCallback(() => {
        navigate(AuthRoutePath.program_details + programDetails?.id);
    }, []);

    if (isLoading) {
        return <PageLoader />
    }

    return (
        <div className={classNames(cls.EditMode, {}, [])}>
            <div className={cls.editHeader}>
                <div className={cls.editHeaderLeft}>
                    <BackLink className={cls.backLink} text="Назад" to={AuthRoutePath.programs} />
                    <h1 className={cls.pageTitle}>{t('Редактирование программы')}</h1>
                </div>
            </div>
            <EditMyProgram
                programId={programDetails?.id }
                onCancel={onCancel}
            />
        </div>
    );
};
