import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';
import cls from './EditProgramPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { BackLink } from '@/shared/ui/BackLink/BackLink.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';
import { EditMyProgram } from '@/features/EditMyProgram';

export const EditProgramPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const params = useParams();

    const onCancel = useCallback(() => {
        navigate(AuthRoutePath.program_details + params.id);
    }, [navigate, params.id]);

    if (!params.id) {
        navigate(AuthRoutePath.program_details + params.id);
    }

    return (
        <div className={classNames(cls.EditMode, {}, [])}>
            <div className={cls.editHeader}>
                <div className={cls.editHeaderLeft}>
                    <BackLink className={cls.backLink} text={t('Назад')} to={AuthRoutePath.programs} />
                    <h1 className={cls.pageTitle}>{t('Редактирование программы')}</h1>
                </div>
            </div>
            <EditMyProgram
                programId={Number(params?.id)}
                onCancel={onCancel}
            />
        </div>
    );
};
