import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import cls from './EditProgramPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { BackLink } from '@/shared/ui/BackLink/BackLink.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { EditMyProgram } from '@/features/EditMyProgram';

// interface EditModeProps {
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

    const {
        programImageUrl,
        programName,
        programDescription,
        programIsPublic,
        programId,
        selectedProgramGoalId,
        selectedProgramDifficultyId,
        programDays,
    } = props;

    const onCancel = useCallback(() => {
        navigate(AuthRoutePath.program_details + programId);
    }, []);

    return (
        <div className={classNames(cls.EditMode, {}, [className])}>

            <div className={cls.editHeader}>
                <div className={cls.editHeaderLeft}>
                    <BackLink className={cls.backLink} text="Назад" to={AuthRoutePath.programs} />
                    <h1 className={cls.pageTitle}>{t('Редактирование программы')}</h1>
                </div>
            </div>

            <EditMyProgram
                programDays={programDays}
                selectedProgramGoalId={selectedProgramGoalId}
                selectedProgramDifficultyId={selectedProgramDifficultyId}
                programId={programId}
                onCancel={onCancel}
                programIsPublic={programIsPublic}
                programName={programName}
                programDescription={programDescription}
                programImageUrl={programImageUrl}
            />
        </div>
    );
};
