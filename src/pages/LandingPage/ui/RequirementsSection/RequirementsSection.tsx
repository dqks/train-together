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
                <h2 className="section-title">{t('Создавайте тренировки под свои требования')}</h2>
                <p className="text-center text-muted mb-lg">
                    {t('Выберите свою цель — мы подберём упражнения и программу')}
                </p>
                <div className={cls.requirementsGrid}>
                    <RequirementCard
                        title={t('Набор массы')}
                        description={t('Силовые тренировки для роста мышц')}
                    />
                    <RequirementCard
                        title={t('Атлетизм')}
                        description={t('Развитие всех качеств')}
                    />
                    <RequirementCard
                        title={t('Выносливость')}
                        description={t('Длительные нагрузки для выносливости')}
                    />
                    <RequirementCard
                        title={t('Сила')}
                        description={t('Максимальные веса и мощь')}
                    />
                </div>
            </Container>
        </section>
    );
};
