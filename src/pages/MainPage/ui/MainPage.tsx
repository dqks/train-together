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
                description="Вы можете автоматически создать программу тренировок, под выбранные вами требования"
            >
                <p>Тело</p>
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
                <p>Тело</p>
            </LandingSection>

            <LandingSection 
                title="Самые популярные тренировки пользователей" 
            >
                <p>Тело</p>
            </LandingSection>

            <ExerciseCard />
            <Chip text={"Чип"}/>
            <TrainingProgramCard/>
            <UserCard />
            <EquipmentCard />

            <LandingTrainingProgramCard/>

            <Footer />
        </div>
    )
}

export default MainPage;