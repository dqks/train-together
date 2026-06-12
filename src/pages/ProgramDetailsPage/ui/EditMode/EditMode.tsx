import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import cls from './EditMode.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { BackLink } from '@/shared/ui/BackLink/BackLink.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { EditMyProgram } from '@/features/EditMyProgram';

interface EditModeProps {
    className?: string;
    setIsEditMode: (value: boolean) => void
    programImageUrl: string | undefined
    programName: string | undefined
    programDescription: string | undefined
    programIsPublic: boolean | undefined
    programId: number | undefined
    selectedProgramGoalId: number | undefined
    selectedProgramDifficultyId: number | undefined
}

export const EditMode = (props: EditModeProps) => {
    const { t } = useTranslation();

    const {
        className,
        programImageUrl,
        programName,
        programDescription,
        programIsPublic,
        programId,
        selectedProgramGoalId,
        selectedProgramDifficultyId,
        setIsEditMode,
    } = props;

    const onCancel = useCallback(() => {
        setIsEditMode(false);
    }, [setIsEditMode]);

    return (
        <div className={classNames(cls.EditMode, {}, [className])}>

            <div className={cls.editHeader}>
                <div className={cls.editHeaderLeft}>
                    <BackLink className={cls.backLink} text="Назад" to={AuthRoutePath.programs} />
                    <h1 className={cls.pageTitle}>{t('Редактирование программы')}</h1>
                </div>
            </div>

            <EditMyProgram
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
