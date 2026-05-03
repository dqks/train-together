import { useTranslation } from 'react-i18next';
import { Container } from '../Container/Container.tsx';
import { ProgramCard } from '@/entities/Program';

export const PopularProgramsSection = () => {
    const { t } = useTranslation();
    return (
        <section className="section">
            <Container>
                <h2 className="section-title">Самые популярные тренировки</h2>
                <p className="text-center text-muted mb-lg">Лучшие программы по версии нашего сообщества</p>
                <div className="grid grid-3">
                    <ProgramCard
                        id={1}
                        programName="Домашняя тренировка"
                        description="Без оборудования дома"
                        imageUrl="dsds"
                    />
                    <ProgramCard
                        id={1}
                        programName="Домашняя тренировка"
                        description="Без оборудования дома"
                        imageUrl="dsds"
                    />
                    <ProgramCard
                        id={1}
                        programName="Домашняя тренировка"
                        description="Без оборудования дома"
                        imageUrl="dsds"
                    />
                </div>
            </Container>
        </section>
    );
};
