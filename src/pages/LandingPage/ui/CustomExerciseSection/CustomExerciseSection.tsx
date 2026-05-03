import { useTranslation } from 'react-i18next';
// import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CustomExerciseSection.module.scss';
import { Container } from '../Container/Container.tsx';
import { ModalAddContent } from '@/features/AddExercise';

interface CustomExerciseSectionProps {
    className?: string;
}

export const CustomExerciseSection = ({ className } : CustomExerciseSectionProps) => {
    const { t } = useTranslation();
    return (
        <section className="section section-light">
            <h2 className="section-title">Добавляйте свои упражнения</h2>
            <p className="text-center text-muted mb-lg">
                Создавайте уникальные упражнения под ваше оборудование и
                цели
            </p>
            <div className={cls.formWrapper}>
                <ModalAddContent />
            </div>
        </section>
    );
};
