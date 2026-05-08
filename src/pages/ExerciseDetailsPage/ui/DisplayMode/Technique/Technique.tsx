import { useTranslation } from 'react-i18next';
import cls from './Technique.module.scss';
import type { ListItem } from '@/entities/Exercise';

interface TechniqueProps {
    technique: ListItem[] | undefined
}

export const Technique = ({ technique } : TechniqueProps) => {
    const { t } = useTranslation();

    const techniqueList = technique?.map((item, index) => (
        <div className={cls.stepItem} key={index}>
            <span className={cls.stepNumber}>{item.order}</span>
            <p className={cls.stepText}>
                {item.text}
            </p>
        </div>
    ));

    return (
        <div className={cls.exerciseSection}>
            <h2 className={cls.sectionTitle}>{t('Техника выполнения')}</h2>
            <div className={cls.stepsList}>
                {techniqueList}
            </div>
        </div>
    );
};
