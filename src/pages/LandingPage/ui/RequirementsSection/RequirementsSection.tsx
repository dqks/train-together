import { useTranslation } from 'react-i18next';
import cls from './RequirementSection.module.scss';
import { RequirementCard } from './RequirementCard/RequirementCard.tsx';
import { Container } from '../Container/Container.tsx';

// interface RequirementsSectionProps {
//     className?: string;
// }

export const RequirementsSection = () => {
    const { t } = useTranslation();
    return (
        <section className="section section-light">
            <Container>
                <h2 className="section-title">Создавайте тренировки под свои требования</h2>
                <p className="text-center text-muted mb-lg">
                    Выберите свою цель — мы подберём упражнения и программу
                </p>
                <div className={cls.requirementsGrid}>
                    <RequirementCard
                        title="Набор массы"
                        description="Силовые тренировки для роста мышц"
                    />
                    <RequirementCard
                        title="Похудение"
                        description="Кардио и жиросжигающие тренировки"
                    />
                    <RequirementCard
                        title="Выносливость"
                        description="Длительные нагрузки для выносливости"
                    />
                    <RequirementCard
                        title="Сила"
                        description="Максимальные веса и мощь"
                    />
                </div>
            </Container>
        </section>
    );
};
