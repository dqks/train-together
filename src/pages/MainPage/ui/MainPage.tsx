import cls from "./MainPage.module.scss"
import { classNames } from "../../../shared/lib/classNames/classNames.ts";
import { ExerciseCard } from "../../../entities/Exercise";
import { TrainingProgramCard } from "../../../entities/TrainingProgram";
import { Chip } from "../../../shared/ui/Chip/Chip.tsx";
import { Footer } from "../../../shared/ui/Footer/Footer.tsx";
import { Navbar } from "../../../widgets/Navbar";

interface MainPageProps {
    className?: string;
}

export const MainPage = ({className} : MainPageProps) => {
    return (
        <div className={classNames(cls.MainPage,{}, [className])}>
            <Navbar />
            <ExerciseCard />
            <Chip text={"Чип"}/>
            <TrainingProgramCard/>
            <Footer />
        </div>
    )
}