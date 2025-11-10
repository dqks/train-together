import cls from "./LandingPagePage.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { TrainingProgramCard } from "../../../entities/TrainingProgram";
import { Footer } from "../../../shared/ui/Footer/Footer.tsx";
import { Header } from "../../../widgets/Header";
import { LandingSection } from "../../../shared/ui/LandingSection/LandingSection.tsx";
import { EmailForm } from "../../../features/EmailForm/ui/EmailForm.tsx";
import {
    LandingTrainingProgramCard
} from "../../../entities/TrainingProgram/ui/LandingTrainingProgramCard/LandingTrainingProgramCard.tsx";
import { RequirementCard } from "../../../shared/ui/RequirementCard/RequirementCard.tsx";
import { CreateExerciseForm } from "../../../features/CreateExerciseForm";
import { SubscribeProgram } from "../../../features/SubscribeProgram";

interface LandingPageProps {
    className?: string;
}

const LandingPage = ({className}: LandingPageProps) => {
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <Header/>
            <LandingSection
                title="Создавайте и делитесь своими программами тренировок"
                description="Зарегистрируйтесь, чтобы использовать полный функционал"
            >
                <EmailForm/>
            </LandingSection>

            <LandingSection
                title="Создавайте тренировки под свои требования"
                description="Вы можете создать автоматически создать тренировки для:"
            >
                <div className={cls.requirementCardWrapper}>
                    <RequirementCard title="Набор мышечной массы"
                        description="Созданная тренировка идеально подойдет для гипертрофии мышц, а следовательно набора мышечной массы  и увеличения объемов"/>
                    <RequirementCard title="Набор мышечной массы"
                        description="Созданная тренировка идеально подойдет для гипертрофии мышц, а следовательно набора мышечной массы  и увеличения объемов"/>
                    <RequirementCard title="Набор мышечной массы"
                        description="Созданная тренировка идеально подойдет для гипертрофии мышц, а следовательно набора мышечной массы  и увеличения объемов"/>
                    <RequirementCard title="Набор мышечной массы"
                        description="Созданная тренировка идеально подойдет для гипертрофии мышц, а следовательно набора мышечной массы  и увеличения объемов"/>
                </div>
            </LandingSection>

            <LandingSection
                title="Сохраняйте тренировки пользователей себе"
                description="Вы можете отслеживатья тренировки, созданные другими пользователями"
            >
                <TrainingProgramCard/>
                <SubscribeProgram/>
            </LandingSection>

            <LandingSection
                title="Добавляйте свои упражнения"
                description="Вы можете добавить свои упражнения, которые будут доступны только вам"
            >
                <CreateExerciseForm className={cls.createExerciseForm} submitButtonText="Опробовать"/>
            </LandingSection>

            <LandingSection
                title="Самые популярные тренировки пользователей"
            >
                <div className={cls.trainingProgramCardsWrapper}>
                    <LandingTrainingProgramCard/>
                    <LandingTrainingProgramCard/>
                    <LandingTrainingProgramCard/>
                </div>
            </LandingSection>
            <Footer/>
        </div>
    )
}

export default LandingPage;