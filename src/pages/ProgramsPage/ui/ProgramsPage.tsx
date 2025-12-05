import { useTranslation } from 'react-i18next';
import cls from './ProgramsPage.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames.ts';
import { ProgramsList } from '../../../widgets/ProgramsList';
import { FilterPrograms } from '../../../widgets/FilterPrograms';
import { usePageTitle } from '../../../shared/lib/usePageTItle/usePageTitle.ts';

interface ProgramsPageProps {
    className?: string;
}

const ProgramsPage = ({ className } : ProgramsPageProps) => {
    const { t } = useTranslation();

    usePageTitle('Программы пользователей', t);

    return (
        <div className={classNames(cls.ProgramsPage, {}, [className])}>
            <ProgramsList />
            <FilterPrograms />
        </div>
    );
};

export default ProgramsPage;
