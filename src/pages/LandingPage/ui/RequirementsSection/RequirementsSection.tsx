import { useTranslation } from 'react-i18next';
import cls from './RequirementSection.module.scss';
import { RequirementCard } from './RequirementCard/RequirementCard.tsx';
import { Container } from '../Container/Container.tsx';
import MuscleGain from '@/shared/assets/icons/gain.svg?react';
import Lightning from '@/shared/assets/icons/lightning.svg?react';
import Clock from '@/shared/assets/icons/clock.svg?react';
import Shield from '@/shared/assets/icons/shield.svg?react';

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
                        icon={<MuscleGain />}
                        title={t('Набор массы')}
                        description={t('Силовые тренировки для роста мышц')}
                    />
                    <RequirementCard
                        icon={<Lightning />}
                        title={t('Атлетизм')}
                        description={t('Развитие всех качеств')}
                    />
                    <RequirementCard
                        icon={<Clock />}
                        title={t('Выносливость')}
                        description={t('Длительные нагрузки для выносливости')}
                    />
                    <RequirementCard
                        icon={<Shield />}
                        title={t('Сила')}
                        description={t('Максимальные веса и мощь')}
                    />
                </div>
            </Container>
        </section>
    );
};
