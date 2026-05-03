import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SaveProgramSection.module.scss';
import { ProgramCard } from '@/entities/Program';
import { Container } from '../Container/Container.tsx';

// interface SaveProgramSectionProps {
//     className?: string;
// }

export const SaveProgramSection = () => {
    const { t } = useTranslation();
    return (
        <section className={classNames(cls.SaveProgramSection, {}, ['section'])}>
            <Container>
                <h2 className="section-title">Сохраняйте тренировки пользователей</h2>
                <p className="text-center text-muted mb-lg">
                    Подписывайтесь на авторов и сохраняйте понравившиеся
                    программы
                </p>
                <ProgramCard
                    id={1}
                    className={cls.program}
                    programName="Сила и мощь"
                    description="Комплексная программа для развития силы и увеличения мышечной массы. Включает базовые упражнения со штангой и гантелями."
                    imageUrl="ds"
                />
            </Container>
        </section>
    );
};
