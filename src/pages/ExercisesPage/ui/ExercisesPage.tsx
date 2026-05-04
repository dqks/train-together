import { useTranslation } from 'react-i18next';
import cls from './ExercisesPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { ExerciseCardList } from '@/widgets/ExerciseCardList';
import { ExercisesControl } from '@/widgets/ExercisesControl';

const ExercisesPage = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ExercisesPage, {}, [])}>
            <div className="page-header-row">
                <div>
                    <h1 className="page-title">{t('Упражнения')}</h1>
                    <p className="page-subtitle">{t('Найдите упражнение по мышцам или оборудованию')}</p>
                </div>
            </div>
            <ExercisesControl />
            <ExerciseCardList />
        </div>
    );
};

export default ExercisesPage;
