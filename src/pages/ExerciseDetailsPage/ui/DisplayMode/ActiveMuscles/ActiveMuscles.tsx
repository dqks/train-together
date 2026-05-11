import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ActiveMuscles.module.scss';
import type { Muscle } from '@/entities/Muscle';

interface ActiveMusclesProps {
    secondaryMuscles: Muscle[] | undefined;
    primaryMuscle: Muscle | undefined;
}

export const ActiveMuscles = ({ secondaryMuscles, primaryMuscle } : ActiveMusclesProps) => {
    const { t, i18n } = useTranslation();

    const secondaryMuscleList = secondaryMuscles?.map((muscle, index) => (
        <div className={cls.muscleItem} key={index}>
            {i18n.language === 'en' ? muscle.nameEng : muscle.name}
        </div>
    ));

    return (
        <div className={cls.exerciseSection}>
            <h2 className={cls.sectionTitle}>{t('Задействованные мышцы')}</h2>
            <div className={cls.muscleList}>
                <div className={classNames(cls.muscleItem, {}, [cls.primary])}>
                    {i18n.language === 'en' ? primaryMuscle?.nameEng : primaryMuscle?.name}
                </div>
                {secondaryMuscleList}
            </div>
        </div>
    );
};
