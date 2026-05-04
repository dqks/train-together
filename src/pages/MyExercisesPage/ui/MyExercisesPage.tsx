import { useTranslation } from 'react-i18next';
import cls from './MyExercisesPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { usePageTitle } from '@/shared/lib/usePageTItle/usePageTitle.ts';
import { AddExerciseButton } from '@/features/AddExercise';
import { MyExerciseCardList } from '@/widgets/MyExerciseCardList';

interface ExercisesPageProps {
    className?: string;
}

const MyExercisesPage = ({ className } : ExercisesPageProps) => {
    const { t } = useTranslation();
    usePageTitle('Ваши упражнения', t);

    return (
        <div className={classNames(cls.ExercisesPage, {}, [className])}>
            <div className={cls.pageHeaderContent}>
                <div>
                    <h1 className="page-title">{t('Ваши программы')}</h1>
                    <p className="page-subtitle">
                        {t('Создавайте и управляйте своими программами тренировок')}
                    </p>
                </div>
                <AddExerciseButton />
            </div>
            <MyExerciseCardList />
        </div>
    );
};

export default MyExercisesPage;
