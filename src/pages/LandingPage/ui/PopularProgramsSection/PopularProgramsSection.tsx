import { useTranslation } from 'react-i18next';
import { Container } from '../Container/Container.tsx';
import { ProgramCard } from '@/entities/Program';
import cls from './PopularProgramsSection.module.scss';

export const PopularProgramsSection = () => {
    const { t } = useTranslation();
    return (
        <section className="section">
            <Container>
                <h2 className="section-title">{t('Самые популярные тренировки')}</h2>
                <p className="text-center text-muted mb-lg">
                    {t('Лучшие программы по версии нашего сообщества')}
                </p>
                <div className="grid grid-3">
                    <ProgramCard
                        id={1}
                        className={cls.programCard}
                        programName="Домашняя тренировка"
                        description="Без оборудования дома"
                        imageUrl="dsds"
                    />
                    <ProgramCard
                        id={1}
                        className={cls.programCard}
                        programName="Домашняя тренировка"
                        description="Без оборудования дома"
                        imageUrl="dsds"
                    />
                    <ProgramCard
                        id={1}
                        programName="Домашняя тренировка"
                        className={cls.programCard}
                        description="Без оборудования дома"
                        imageUrl="dsds"
                    />
                </div>
            </Container>
        </section>
    );
};
