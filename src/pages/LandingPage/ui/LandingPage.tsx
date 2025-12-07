import { useTranslation } from 'react-i18next';
import cls from './LandingPage.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames.ts';
import {
    ProgramCard,
    LandingProgramCard,
} from '../../../entities/Program';
import { Footer } from '../../../shared/ui/Footer/Footer.tsx';
import { Header } from '../../../widgets/Header';
import {
    LandingSection,
} from '../../../shared/ui/LandingSection/LandingSection.tsx';
import { EmailForm } from '../../../features/EmailForm/ui/EmailForm.tsx';
import {
    RequirementCard,
} from './RequirementCard/RequirementCard.tsx';
import { SubscribeProgram } from '../../../features/SubscribeProgram';
import { CreateExerciseForm } from '../../../widgets/FIlterExercises';

interface LandingPageProps {
    className?: string;
}

const LandingPage = ({ className }: LandingPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <Header />
            <LandingSection
                title={t('Создавайте и делитесь своими программами тренировок')}
                description={t('Зарегистрируйтесь, чтобы использовать полный функционал')}
            >
                <EmailForm />
            </LandingSection>

            <LandingSection
                title={t('Создавайте тренировки под свои требования')}
                description={t('Вы можете создать автоматически создать тренировки для:')}
            >
                <div className={cls.requirementCardWrapper}>
                    <RequirementCard
                        title={t('Набор мышечной массы')}
                        description={t('Созданная тренировка идеально подойдет для гипертрофии '
                            + 'мышц, а следовательно набора мышечной массы  и увеличения объемов')}
                    />
                    <RequirementCard
                        title={t('Увеличение силовых показателей')}
                        description={t('Программы сконцентрированы на развитии максимальной силы за счёт работы с предельными весамии и прогрессии нагрузок в базовых упражнениях')}
                    />
                    <RequirementCard
                        title={t('Увеличение вертикального прыжка')}
                        description={t('Специализированные программы направлена на развитие взрывной силы ног и плиометрических способностей для максимального высотного результата')}
                    />
                    <RequirementCard
                        title={t('Для улучшения атлетизма')}
                        description={t('Универсальные программы, которые развивают общую физическую подготовку, координацию и функциональные качества, необходимые для любого спорта')}
                    />
                </div>
            </LandingSection>

            <LandingSection
                title={t('Сохраняйте тренировки пользователей себе')}
                description={t(
                    'Вы можете отслеживать тренировки, созданные другими пользователями',
                )}
            >
                <ProgramCard className={cls.programCard} />
                <SubscribeProgram className={cls.subscribeProgram} />
            </LandingSection>

            <LandingSection
                title={t('Добавляйте свои упражнения')}
                description={t(
                    'Вы можете добавить свои упражнения, которые будут доступны только вам',
                )}
            >
                <CreateExerciseForm className={cls.createExerciseForm} />
            </LandingSection>

            <LandingSection
                title={t('Самые популярные тренировки пользователей')}
            >
                <div className={cls.trainingProgramCardsWrapper}>
                    <LandingProgramCard />
                    <LandingProgramCard />
                    <LandingProgramCard />
                </div>
            </LandingSection>
            <Footer />
        </div>
    );
};

export default LandingPage;
