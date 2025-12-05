import { useTranslation } from 'react-i18next';
import cls from './OveriviewContent.module.scss';
import { classNames } from '../../../../shared/lib/classNames/classNames.ts';
import { ProgramCard } from '../../../../entities/Program';

interface OverviewContentProps {
    className?: string;
}

export const OverviewContent = ({ className } : OverviewContentProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.OverviewContent, {}, [className])}>
            <h1 className={cls.programTitle}>{t('Закрепленные программы')}</h1>
            <div className={cls.programsWrapper}>
                <ProgramCard className={cls.program} />
                <ProgramCard className={cls.program} />
                <ProgramCard className={cls.program} />
                <ProgramCard className={cls.program} />
            </div>
        </div>
    );
};
