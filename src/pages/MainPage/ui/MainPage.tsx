import cls from "./MainPage.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { ExerciseCard } from "../../../entities/Exercise";
import { TrainingProgramCard } from "../../../entities/TrainingProgram";
import { Chip } from "../../../shared/ui/Chip/Chip.tsx";
import { Footer } from "../../../shared/ui/Footer/Footer.tsx";
import { Navbar } from "../../../widgets/Navbar";
import { LandingSection } from "../../../shared/ui/LandingSection/LandingSection.tsx";
import { UserCard } from "../../../entities/User";
import { EmailForm } from "../../../features/EmailForm/ui/EmailForm.tsx";
import { EquipmentCard } from "../../../entities/Equipment/index.ts";
import { LandingTrainingProgramCard } from "../../../entities/TrainingProgram/ui/LandingTrainingProgramCard/LandingTrainingProgramCard.tsx";
import { RequirementCard } from "../../../shared/ui/RequirementCard/RequirementCard.tsx";
import { CreateExerciseForm } from "../../../features/CreateExerciseForm/ui/CreateExerciseForm.tsx";

interface MainPageProps {
    className?: string;
}

const MainPage = ({className} : MainPageProps) => {
    return (
        <div className={classNames(cls.MainPage,{}, [className])}>
            <Navbar />
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
                    <RequirementCard  title="Набор мышечной массы" description="Созданная тренировка идеально подойдет для гипертрофии мышц, а следовательно набора мышечной массы  и увеличения объемов"/>
                    <RequirementCard  title="Набор мышечной массы" description="Созданная тренировка идеально подойдет для гипертрофии мышц, а следовательно набора мышечной массы  и увеличения объемов"/>
                    <RequirementCard  title="Набор мышечной массы" description="Созданная тренировка идеально подойдет для гипертрофии мышц, а следовательно набора мышечной массы  и увеличения объемов"/>
                    <RequirementCard  title="Набор мышечной массы" description="Созданная тренировка идеально подойдет для гипертрофии мышц, а следовательно набора мышечной массы  и увеличения объемов"/>
                </div>
            </LandingSection>

            <LandingSection 
                title="Сохраняйте тренировки пользователей себе" 
                description="Вы можете сохранять тренировки созданные другими пользователями"
            >
                <p>Тело</p>
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

            <ExerciseCard />
            <Chip text={"Чип"}/>
            <TrainingProgramCard/>
            <UserCard />
            <EquipmentCard />

            <Footer />
        </div>
    )
}

export default MainPage;