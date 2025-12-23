import { useTranslation } from 'react-i18next';
import { useOutletContext } from 'react-router';
import { useEffect } from 'react';
import cls from './ProgramDetailsPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { usePageTitle } from '@/shared/lib/usePageTItle/usePageTitle.ts';
import { ProgramCard, ProgramDay } from '@/entities/Program';
import { SubscribeProgram } from '@/features/SubscribeProgram';
import { Days } from '@/entities/Program/ui/ProgramDay/ProgramDay.tsx';
import type { AppContextType } from '@/app/layout/AppLayout/ui/AppLayout.tsx';
import { AuthRoutePath } from '@/shared/config/routeConfig/authRouteConfig.tsx';

interface ProgramDetailsPageProps {
    className?: string;
}

const ProgramDetailsPage = ({ className } : ProgramDetailsPageProps) => {
    const { t } = useTranslation();
    usePageTitle('Программа', t);
    const context : AppContextType = useOutletContext();

    useEffect(() => {
        context.setBackButton(AuthRoutePath.programs); // TODO исправить что с программа -> программы, моя программа -> мои программы
        // TODO передавать через state в to
        return () => {
            context.setBackButton('');
        };
    }, [context]);

    return (
        <div className={classNames(cls.ProgramDetailsPage, {}, [className])}>
            <ProgramCard className={cls.programCard} />
            <SubscribeProgram />
            <ProgramDay day={Days.MONDAY} className={cls.programDay} />
            <ProgramDay day={Days.WEDNESDAY} className={cls.programDay} />
            <ProgramDay day={Days.FRIDAY} className={cls.programDay} />
        </div>
    );
};

export default ProgramDetailsPage;
