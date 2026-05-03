import { useTranslation } from 'react-i18next';
import cls from './CustomExerciseSection.module.scss';
import { ModalAddContent } from '@/features/AddExercise';

export const CustomExerciseSection = () => {
    const { t } = useTranslation();
    return (
        <section className="section section-light">
            <h2 className="section-title">{t('Добавляйте свои упражнения')}</h2>
            <p className="text-center text-muted mb-lg">
                {t('Создавайте уникальные упражнения под ваше оборудование и цели')}
            </p>
            <div className={cls.formWrapper}>
                <ModalAddContent />
            </div>
        </section>
    );
};
