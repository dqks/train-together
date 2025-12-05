import { useTranslation } from 'react-i18next';
import cls from './MyProgramsPage.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames.ts';
import { ProgramsList } from '../../../widgets/ProgramsList';
import { FilterMyProgram } from '../../../widgets/FilterMyPrograms';
import { usePageTitle } from '../../../shared/lib/usePageTItle/usePageTitle.ts';

interface YourTrainingProgramsPageProps {
    className?: string;
}

const MyProgramsPage = ({ className } : YourTrainingProgramsPageProps) => {
    const { t } = useTranslation();

    usePageTitle('Ваши программы', t);

    return (
        <div className={classNames(cls.MyProgramsPage, {}, [className])}>
            <FilterMyProgram />
            <ProgramsList />
        </div>
    );
};

export default MyProgramsPage;
